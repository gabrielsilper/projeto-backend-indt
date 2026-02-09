import RefreshToken from "entities/refresh-token";
import { Repository } from "typeorm";
import { appDataSource } from "../database/data-source";

export default class RefreshTokenRepository extends Repository<RefreshToken> {
	constructor() {
		super(RefreshToken, appDataSource.manager);
	}
}
