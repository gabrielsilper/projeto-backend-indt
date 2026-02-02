import RefreshToken from 'entities/refresh-token';
import { appDataSource } from '../database/data-source';
import { Repository } from 'typeorm';

export default class RefreshTokenRepository extends Repository<RefreshToken> {
  constructor() {
    super(RefreshToken, appDataSource.manager);
  }
}
