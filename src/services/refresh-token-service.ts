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
    return this.refreshTokenRepository.create({
      jti: IdentifierUtils.generateUUID(),
      sessionId: IdentifierUtils.generateUUID(),
      userAgent,
      ipAddress,
      researcher,
    });
  }

  generateAccessToken(researcher: Researcher) {
    return this.tokenService.generate({
      sub: researcher.id,
      email: researcher.email,
      type: 'access',
    });
  }

  async generateRefreshToken(researcher: Researcher, jti: string) {
    const token = this.tokenService.generate({
      sub: researcher.id,
      jti,
      type: 'refresh',
    });
    const tokenHash = await this.encrypter.encrypt(token);

    const expiresInMs = ms(getJwtConfig('refresh').expiresIn as ms.StringValue);
    const expireIn = new Date(Date.now() + expiresInMs);

    await this.refreshTokenRepository.update(
      { jti },
      {
        tokenHash,
        expireIn,
        revoked: false,
      },
    );

    return token;
  }
}
