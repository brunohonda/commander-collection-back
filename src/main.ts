import express from 'express';
import { Config } from './core/config';

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const config = new Config();
export const server = app.listen(
  config.port,
  () => console.log(`server running on port ${ config.port }`)
);
