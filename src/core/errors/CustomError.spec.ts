import assert from 'assert';
import { expect } from 'chai';
import { suite, test } from 'mocha';
import { CustomError } from './CustomError';

suite(CustomError.name, () => {
  test('should create', () => {
    const error = new CustomError(500, 'Error message');

    assert.ok(error);
    assert.equal(error.code, 500);
    assert.equal(error.message, 'Error message');
    expect(error).to.be.instanceOf(Error);
  });
});
