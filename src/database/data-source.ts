import { DataSource } from 'typeorm';
import "reflect-metadata"

const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DB;
const port = parseInt(process.env.POSTGRES_PORT as string) || 5432;

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres-server',
  port,
  username,
  password,
  database,
  entities: ['src/entities/*.ts'],
  logging: true,
  synchronize: true,
});
