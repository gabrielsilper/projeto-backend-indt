import SensorService from 'services/sensor-service';
import { Request, Response } from 'express';
import SensorCreationDTO from 'dtos/sensor-creation-dto';

export default class SensorController {
  constructor(private sensorService: SensorService) {}

  async getAllSensors(_req: Request, res: Response) {
    const sensors = await this.sensorService.getAllSensors();
    return res.json(sensors);
  }

  async getSensorById(_req: Request, res: Response) {
    const { id } = _req.params;
    const sensor = await this.sensorService.getSensorById(id as string);
    return res.json(sensor);
  }

  async createSensor(req: Request, res: Response) {
    const sensorData = req.body as SensorCreationDTO;
    const newSensor = await this.sensorService.createSensor(sensorData);
    return res.status(201).json(newSensor);
  }

  async updateSensor(req: Request, res: Response) {
    const { id } = req.params;
    const sensorData = req.body as Partial<SensorCreationDTO>;
    const updatedSensor = await this.sensorService.updateSensor(id as string, sensorData);
    return res.json(updatedSensor);
  }

  async deleteSensor(req: Request, res: Response) {
    const { id } = req.params;
    await this.sensorService.deleteSensor(id as string);
    return res.status(204).send();
  }
}
