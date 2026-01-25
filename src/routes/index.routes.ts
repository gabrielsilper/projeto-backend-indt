import { Router } from "express";
import sensorRouter from "./sensor.routes";

const indexRoutes = Router();

indexRoutes.use('/sensors', sensorRouter);

export default indexRoutes;