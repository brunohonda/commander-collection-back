import assert from 'assert';
import { suite, test } from 'mocha';
import { Repository } from 'typeorm';

import { UserRepository } from './User.repository';

suite('UserRepository', () => {
  test('should create', () => {
    assert.ok(UserRepository);
    assert.equal(UserRepository instanceof Repository, true);
  });
});
