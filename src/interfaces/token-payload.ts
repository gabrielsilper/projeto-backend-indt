import { jwtType } from "config/jwt-config";

export interface TokenPayload {
  sub: string;
  jti: string;
  type: jwtType;
}