import assert from 'assert';
import { suite, test } from 'mocha';

import { router } from './main.routing';

suite('Main Routing', () => {
  test('should create', () => {
    assert.ok(router);
  });
});
