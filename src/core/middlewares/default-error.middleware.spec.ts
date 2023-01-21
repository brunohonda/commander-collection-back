import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { suite, test } from 'mocha';

import { errorHandler } from './default-error.middleware';

chai.use(spies);

suite(errorHandler.name, () => {
  let next: ChaiSpies.SpyFunc0Proxy<void>;

  beforeEach(() => {
    next = chai.spy(() => {});
  });

  test('should call node error handler when header already sended', () => {
    const error = new Error('Error test');
    const res = {
      headersSent: true
    } as any;

    errorHandler(error, {} as any, res, next);

    expect(next).to.have.been.called.with(error);
  });

  test('should send response with custom error message', () => {
    const error = new Error('Error test');
    const res = {
      json: chai.spy(() => {}),
      status: chai.spy(() => res)
    } as any;

    errorHandler(error, {} as any, res, next);

    expect(res.status).to.have.been.called.with(500);
    expect(res.json).to.have.been.called.with({
      code: 500,
      message: 'Error test'
    });
    expect(next).to.have.been.called.exactly(1);
  });

  test('should send response with custom status code and error message', () => {
    const error = {
      code: 400,
      message: 'Custom error message'
    };
    const res = {
      json: chai.spy(() => {}),
      status: chai.spy(() => res)
    } as any;

    errorHandler(error, {} as any, res, next);

    expect(res.status).to.have.been.called.with(400);
    expect(res.json).to.have.been.called.with({
      code: 400,
      message: 'Custom error message'
    });
    expect(next).to.have.been.called.exactly(1);
  });
});
