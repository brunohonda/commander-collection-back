import assert from 'assert';
import { expect } from 'chai';
import { suite, test } from 'mocha';
import { BadRequestError } from './BadRequestError';

suite(BadRequestError.name, () => {
  test('should create', () => {
    const error = new BadRequestError();

    assert.ok(error);
    assert.equal(error.code, 400);
    assert.equal(error.message, 'Bad request');
    expect(error).to.be.instanceOf(Error);
  });
});
