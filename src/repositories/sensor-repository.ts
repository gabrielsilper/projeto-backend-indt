import { Repository } from 'typeorm';
import { Sensor } from '../entities/sensor';
import { appDataSource } from '../database/data-source';

export default class SensorRepository extends Repository<Sensor> {
  constructor() {
    super(Sensor, appDataSource.manager);
  }
}