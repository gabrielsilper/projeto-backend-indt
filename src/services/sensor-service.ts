import SensorCreationDTO from 'dtos/sensor-creation-dto';
import SensorRepository from 'repositories/sensor-repository';
import { SensorNotFound } from 'errors/SensorNotFound';

export default class SensorService {
  constructor(private sensorRepository: SensorRepository) {}

  async getAllSensors() {
    return this.sensorRepository.find();
  }

  async getSensorById(id: string) {
    const sensor = await this.sensorRepository.findOneBy({ id });

    if (!sensor) {
      throw new SensorNotFound();
    }

    return sensor;
  }

  async createSensor(sensorData: SensorCreationDTO) {
    const sensor = this.sensorRepository.create({ ...sensorData });
    return this.sensorRepository.save(sensor);
  }

  async updateSensor(id: string, sensorData: Partial<SensorCreationDTO>) {
    const sensor = await this.getSensorById(id);
    this.sensorRepository.merge(sensor, sensorData);
    return this.sensorRepository.save(sensor);
  }

  async deleteSensor(id: string) {
    const sensor = await this.getSensorById(id);
    return this.sensorRepository.remove(sensor);
  }
}
