import SensorService from 'services/sensor-service';
import { Request, Response } from 'express';
import SensorCreationDTO from 'dtos/sensor-creation-dto';

export default class SensorController {
  constructor(private sensorService: SensorService) {}

  async getAll(_req: Request, res: Response) {
    const sensors = await this.sensorService.getAll();
    return res.json(sensors);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const sensor = await this.sensorService.getById(id as string);
    return res.json(sensor);
  }

  async create(req: Request, res: Response) {
    const sensorData = req.body as SensorCreationDTO;
    const newSensor = await this.sensorService.create(sensorData);
    return res.status(201).json(newSensor);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const sensorData = req.body as Partial<SensorCreationDTO>;
    const updatedSensor = await this.sensorService.update(id as string, sensorData);
    return res.json(updatedSensor);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.sensorService.delete(id as string);
    return res.status(204).send();
  }
}
