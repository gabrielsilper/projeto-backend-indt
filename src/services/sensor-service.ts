import SensorCreationDTO from 'dtos/sensor-creation-dto';
import SensorRepository from 'repositories/sensor-repository';
import { SensorNotFoundError } from 'errors/sensor-not-found.error';
import { SensorAlreadyExistsError } from 'errors/sensor-already-exists.error';

export default class SensorService {
  constructor(private sensorRepository: SensorRepository) {}

  async getAll() {
    return this.sensorRepository.find();
  }

  async getById(id: string) {
    const sensor = await this.sensorRepository.findOneBy({ id });

    if (!sensor) {
      throw new SensorNotFoundError();
    }

    return sensor;
  }

  async create(sensorData: SensorCreationDTO) {
    const serialNumberExists = await this.sensorRepository.existsBy({ serialNumber: sensorData.serialNumber });

    if (serialNumberExists) {
      throw new SensorAlreadyExistsError();
    }

    const sensor = this.sensorRepository.create({ ...sensorData });
    return this.sensorRepository.save(sensor);
  }

  async update(id: string, sensorData: Partial<SensorCreationDTO>) {
    const sensor = await this.getById(id);
    const updatedSensor = this.sensorRepository.merge(sensor, sensorData);
    return this.sensorRepository.save(updatedSensor);
  }

  async delete(id: string) {
    const sensor = await this.getById(id);
    return this.sensorRepository.remove(sensor);
  }
}
