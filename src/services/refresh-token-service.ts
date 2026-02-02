import { TokenPayload } from 'interfaces/token-payload';
import ITokenService from 'interfaces/token-service';
import RefreshTokenRepository from 'repositories/refresh-token-repository';
import IdentifierUtils from 'utils/identifier-utils';
import ms from 'ms';
import { getJwtConfig } from 'config/jwt-config';
import Researcher from 'entities/researcher';
import IEncrypterService from 'interfaces/encrypter-service';

export default class RefreshTokenService {
  constructor(
    private refreshTokenRepository: RefreshTokenRepository,
    private tokenService: ITokenService,
    private encrypter: IEncrypterService,
  ) {}

  async findByUserAndUserAgent(userId: string, userAgent: string) {
    return this.refreshTokenRepository.findOneBy({
      researcher: { id: userId },
      userAgent,
      revoked: false,
    });
  }

  async create(researcher: Researcher, userAgent: string, ipAddress: string) {
    const jti = IdentifierUtils.generateUUID();

    const tokenPayload: TokenPayload = {
      sub: researcher.id,
      jti: jti,
      type: 'refresh',
    };

    const expireIn = getJwtConfig('refresh').expiresIn;
    const expireInMs = ms(expireIn as ms.StringValue);

    const token = this.tokenService.generate(tokenPayload, 'refresh');
    const tokenHash = await this.encrypter.encrypt(token);

    return this.refreshTokenRepository.create({
      jti,
      sessionId: IdentifierUtils.generateUUID(),
      userAgent,
      ipAddress,
      tokenHash,
      expireIn: new Date(Date.now() + expireInMs),
      researcher,
    });
  }
}
