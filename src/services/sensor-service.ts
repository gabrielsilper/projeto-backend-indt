import SensorCreationDTO from 'dtos/sensor-creation-dto';
import SensorRepository from 'repositories/sensor-repository';

export default class SensorService {
  constructor(private sensorRepository: SensorRepository) {}

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
