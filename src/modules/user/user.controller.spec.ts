import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { suite, test } from 'mocha';
import assert from 'node:assert';

import { User } from '../../entity/user/User';
import { UserController, UserControllerFactory } from './user.controller';

chai.use(spies);

suite(UserController.name, () => {
  const sandbox = chai.spy.sandbox();

  afterEach(() => sandbox.restore());

  test('should create', () => {
    const controller = UserControllerFactory();
    assert.ok(controller);
  });

  suite(UserController.prototype.create.name, () => {
    const controller = UserControllerFactory();
    test('should response with status code 204', async () => {
      sandbox.on((controller as any).repository, 'create', (): User => new User());
      sandbox.on((controller as any).repository, 'save', async (): Promise<User> => new User());

      const response: any = {
        status: chai.spy(() => response),
        end: chai.spy()
      };

      await controller.create({} as any, response);

      expect(response.status).to.have.been.called.with(204);
      expect(response.end).to.have.been.called.exactly(1);
    });

    test('should response with status code 500 when create user fail', async () => {
      sandbox.on((controller as any).repository, 'create', (): User => { throw new Error(); });

      const response: any = {
        status: chai.spy(() => response),
        json: chai.spy()
      };

      await controller.create({} as any, response);

      expect(response.status).to.have.been.called.with(500);
      expect(response.json).to.have.been.called.exactly(1);
    });
  });
});
