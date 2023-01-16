import dotenv from 'dotenv';

export class Config {
  readonly port;

  constructor () {
    if (process.env.NODE_ENV !== 'production') {
      dotenv.config();
    }

    this.port = parseInt(process.env.PORT ?? '3000', 10);
  }
};
