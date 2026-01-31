import { Router } from "express";
import sensorRouter from "./sensor.routes";
import researcherRouter from "./research.routes";

const indexRoutes = Router();

indexRoutes.use('/sensors', sensorRouter);
indexRoutes.use('/researchers', researcherRouter);

export default indexRoutes;