import { InvalidCredentialsError } from 'errors/invalid-credentials.error';
import ResearcherService from './researcher-service';
import IEncrypterService from 'interfaces/encrypter-service';
import RefreshTokenService from './refresh-token-service';

export default class AuthService {
  constructor(
    private researcherService: ResearcherService,
    private refreshTokenService: RefreshTokenService,
    private encrypter: IEncrypterService,
  ) {}

  async login(
    email: string,
    password: string,
    userAgent: string,
    ipAddress: string,
  ) {
    const researcher = await this.researcherService.getByEmail(email);

    if (!researcher) {
      throw new InvalidCredentialsError();
    }

    const passwordMatches = this.encrypter.compare(
      password,
      researcher.password,
    );

    if (!passwordMatches) {
      throw new InvalidCredentialsError();
    }

    let refreshToken = await this.refreshTokenService.findByUserAndUserAgent(
      researcher.id,
      userAgent,
    );

    if (!refreshToken) {
      refreshToken = await this.refreshTokenService.create(
        researcher,
        userAgent,
        ipAddress,
      );
    }

    
  }
}
