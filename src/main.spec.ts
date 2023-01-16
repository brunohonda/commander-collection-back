import { equal } from 'assert';
import { after, suite, test } from 'mocha';

import { server } from './main';

suite('App', () => {
  afterEach(() => server.close());

  after(() => server.close());

  test('should app running', () => {
    equal(true, server.listening);
  });
});
