import { Repository } from "typeorm";
import { appDataSource } from "../database/data-source";
import { Sensor } from "../entities/sensor";

export default class SensorRepository extends Repository<Sensor> {
	constructor() {
		super(Sensor, appDataSource.manager);
	}
}
