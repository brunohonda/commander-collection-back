import dotenv from 'dotenv';

export class Config {
  readonly dbConnectionString;
  readonly port;

  constructor () {
    if (process.env.NODE_ENV !== 'production') {
      dotenv.config();
    }

    this.dbConnectionString = process.env.DB_HOST ?? '';
    this.port = parseInt(process.env.PORT ?? '3000', 10);
  }
};
