import 'reflect-metadata';
import express from 'express';
import { Config } from './core/config';
import { router } from './main.routing';
import { AppDataSource } from './data-source';
import { errorHandler } from './core/middlewares/default-error.middleware';

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

const config = new Config();
AppDataSource.initialize()
  .then(() => {
    app.listen(
      config.port,
      () => console.log(`server running on port ${ config.port }`)
    );
  })
  .catch(console.log);
