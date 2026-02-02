import { Router } from 'express';
import sensorRouter from './sensor.routes';
import researcherRouter from './research.routes';
import authRouter from './auth.routes';

const indexRoutes = Router();

indexRoutes.use(authRouter);
indexRoutes.use('/sensors', sensorRouter);
indexRoutes.use('/researchers', researcherRouter);

export default indexRoutes;
