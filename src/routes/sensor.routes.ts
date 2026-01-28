import SensorController from 'controllers/sensor-controller';
import { Router } from 'express';
import SensorRepository from 'repositories/sensor-repository';
import SensorService from 'services/sensor-service';
import { validateBody } from 'middlewares/validate-body';
import { createSensorSchema } from 'schemas/create-sensor-schema';

const sensorRouter = Router();
const sensorService = new SensorService(new SensorRepository());
const sensorController = new SensorController(sensorService);

sensorRouter.get('/', (req, res) => sensorController.getAllSensors(req, res));
sensorRouter.post('/', validateBody(createSensorSchema), (req, res) => sensorController.createSensor(req, res));
sensorRouter.get('/:id', (req, res) => sensorController.getSensorById(req, res));
sensorRouter.put('/:id', (req, res) => sensorController.updateSensor(req, res));
sensorRouter.delete('/:id', (req, res) => sensorController.deleteSensor(req, res));

export default sensorRouter;
