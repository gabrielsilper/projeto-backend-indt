import AuthController from 'controllers/auth-controller';
import { Router } from 'express';
import RefreshTokenRepository from 'repositories/refresh-token-repository';
import ResearcherRepository from 'repositories/researcher-repository';
import AuthService from 'services/auth-service';
import RefreshTokenService from 'services/refresh-token-service';
import ResearcherService from 'services/researcher-service';
import Bcrypt from 'utils/bcrypt';
import Jwt from 'utils/jwt';

const authRouter = Router();

const researcherService = new ResearcherService(
  new ResearcherRepository(),
  new Bcrypt(),
);

const refreshTokenService = new RefreshTokenService(
  new RefreshTokenRepository(),
  new Jwt(),
  new Bcrypt(),
);

const authService = new AuthService(
  researcherService,
  refreshTokenService,
  new Bcrypt(),
);

const authController = new AuthController(authService);

authRouter.use('/login', (req, res) => authController.login(req, res));

export default authRouter;
