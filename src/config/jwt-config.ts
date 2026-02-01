interface JwtConfig {
  access: {
    secret: string;
    expiresIn: string;
  };
  refresh: {
    secret: string;
    expiresIn: string;
  };
}

export type jwtType = 'access' | 'refresh';

export interface TokenPayload {
  sub: string;
  jti: string;
  type: jwtType;
}

function getEnvOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente ${name} não definida`);
  }
  return value;
}

const jwtConfig: JwtConfig = {
  access: {
    secret: getEnvOrThrow('JWT_ACCESS_SECRET'),
    expiresIn: getEnvOrThrow('JWT_ACCESS_EXPIRATION'),
  },
  refresh: {
    secret: getEnvOrThrow('JWT_REFRESH_SECRET'),
    expiresIn: getEnvOrThrow('JWT_REFRESH_EXPIRATION'),
  },
};

export function getJwtConfig(type: jwtType) {
  return jwtConfig[type];
}
