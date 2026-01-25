import SensorController from 'controllers/sensor-controller';
import { Router } from 'express';
import SensorService from 'services/sensor-service';

const sensorRouter = Router();
const sensorService = new SensorService();
const sensorController = new SensorController(sensorService);

sensorRouter.get('/', sensorController.getAllSensors);
sensorRouter.post('/', sensorController.createSensor);
sensorRouter.get('/:id', sensorController.getSensorById);

export default sensorRouter;
