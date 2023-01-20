import assert from 'assert';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Request, Response } from 'express';
import { suite, test } from 'mocha';

import { AuthController, AuthControllerFactory } from './auth.controller';

chai.use(spies);

suite(AuthController.name, () => {
  let controller: AuthController;

  beforeEach(() => { controller = AuthControllerFactory(); });

  test('should create', () => {
    assert.ok(controller);
  });

  suite(AuthController.prototype.login.name, () => {
    let response: Response;

    beforeEach(() => {
      response = {
        json: chai.spy(),
        status: chai.spy(() => response)
      } as unknown as Response;
    });

    test('should create jwt token', async () => {
      const request = {
        body: {
          username: 'username',
          password: 'password'
        }
      } as unknown as Request;

      await controller.login(request, response);

      expect(response.json).to.have.been.called.with({ token: '' });
    });
  });
});
