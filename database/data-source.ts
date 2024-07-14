import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: +process.env.DB_EXPOSED_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERMAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
