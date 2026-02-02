import { jwtType } from 'config/jwt-config';
import { TokenPayload } from './token-payload';

export default interface ITokenService {
  generate(payload: TokenPayload, type: jwtType): string;
  verify(token: string): TokenPayload;
}
