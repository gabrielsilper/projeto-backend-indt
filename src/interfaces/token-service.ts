import { jwtType } from 'config/jwt-config';
import { AccessTokenPayload, RefreshTokenPayload } from './token-payload';

export default interface ITokenService {
  generate(
    payload: AccessTokenPayload | RefreshTokenPayload,
  ): string;
  verifyAccessToken(token: string): AccessTokenPayload;
  verifyRefreshToken(token: string): RefreshTokenPayload;
}
