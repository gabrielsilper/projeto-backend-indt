import SensorController from 'controllers/sensor-controller';
import { Router } from 'express';
import SensorRepository from 'repositories/sensor-repository';
import SensorService from 'services/sensor-service';

const sensorRouter = Router();
const sensorService = new SensorService(new SensorRepository());
const sensorController = new SensorController(sensorService);

sensorRouter.get('/', (req, res) => sensorController.getAllSensors(req, res));
sensorRouter.post('/', (req, res) => sensorController.createSensor(req, res));
sensorRouter.get('/:id', (req, res) => sensorController.getSensorById(req, res));

export default sensorRouter;
