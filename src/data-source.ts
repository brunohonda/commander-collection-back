import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { Config } from './core/config';
import { entities } from './entity';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: new Config().dbConnectionString,
  database: 'commander-collection',
  synchronize: true,
  logging: false,
  entities,
  migrations: [],
  subscribers: []
});
