import Researcher from 'entities/researcher';
import { appDataSource } from '../database/data-source';
import { Repository } from 'typeorm';

export default class ResearcherRepository extends Repository<Researcher> {
  constructor() {
    super(Researcher, appDataSource.manager);
  }
}
