import AuthService from 'services/auth-service';
import { Request, Response } from 'express';
import LoginDto from 'dtos/login-dto';

export default class AuthController {
  constructor(private authService: AuthService) {}

  async login(req: Request, res: Response) {
    const userAgent = req.headers['user-agent'] ?? 'unknown';
    const ip = req.ip;
    const { email, password } = req.body as LoginDto;

    const tokens = await this.authService.login(
      email,
      password,
      userAgent,
      ip as string,
    );

    res.status(200).json(tokens);
  }
}
