import assert from 'assert';
import { suite, test } from 'mocha';

import { User } from './User';

suite(User.name, () => {
  let user: User;

  beforeEach(() => { user = new User(); });

  test('should create', () => {
    assert.ok(user);
  });

  suite(User.prototype.hashPassword.name, () => {
    test('should assigned salt and update password', () => {
      user.password = '123456';

      user.hashPassword();

      assert.ok(user.salt);
      assert.notEqual(user.password, '123456');
    });
  });
});
