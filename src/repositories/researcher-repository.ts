import Researcher from "entities/researcher";
import { Repository } from "typeorm";
import { appDataSource } from "../database/data-source";

export default class ResearcherRepository extends Repository<Researcher> {
	constructor() {
		super(Researcher, appDataSource.manager);
	}
}
