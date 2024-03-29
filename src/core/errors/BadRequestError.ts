import { CustomError } from './CustomError';

export class BadRequestError extends CustomError {
  constructor (message: string = 'Bad request') {
    super(400, message);
  }
}
