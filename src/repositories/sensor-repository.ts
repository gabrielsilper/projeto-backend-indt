import { Sensor } from '../entities/sensor';
import { appDataSource } from '../database/data-source';
import { Repository } from 'typeorm';

export default class SensorRepository extends Repository<Sensor> {
  constructor() {
    super(Sensor, appDataSource.manager);
  }
}