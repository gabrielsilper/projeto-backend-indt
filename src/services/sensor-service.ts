import SensorCreationDTO from 'dtos/sensor-creation-dto';
import { appDataSource } from 'database/data-source';
import { Sensor } from 'entities/sensor';

export default class SensorService {
  private sensorRepository = appDataSource.getRepository(Sensor);

  async getAllSensors() {
    return this.sensorRepository.find();
  }

  async getSensorById(id: string) {
    return this.sensorRepository.findOneBy({ id });
  }

  async createSensor(sensorData: SensorCreationDTO) {
    const sensor = this.sensorRepository.create({ ...sensorData });
    return this.sensorRepository.save(sensor);
  }
}
