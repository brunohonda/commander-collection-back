import assert from 'assert';
import { suite, test } from 'mocha';
import { Config } from './config';

suite(Config.name, () => {
  const initialEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...initialEnv };
  });

  test('should create config', () => {
    assert.ok(new Config());
  });

  test('should load config from .env', () => {
    process.env.PORT = '2000';
    const config = new Config();

    assert.equal(config.port, 2000);
  });

  test('should not load config when NODE_ENV is "production"', () => {
    process.env.NODE_ENV = 'production';
    const config = new Config();

    assert.deepEqual(config, {
      port: 3000
    });
  });
});
