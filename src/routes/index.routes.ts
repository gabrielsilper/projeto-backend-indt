import { Router } from "express";
import authRouter from "./auth.routes";
import researcherRouter from "./research.routes";
import sensorRouter from "./sensor.routes";

const indexRoutes = Router();

indexRoutes.use(authRouter);
indexRoutes.use("/sensors", sensorRouter);
indexRoutes.use("/researchers", researcherRouter);

export default indexRoutes;
