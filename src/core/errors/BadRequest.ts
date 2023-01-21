import { CustomError } from './CustomError';

export class BadRequest extends CustomError {
  constructor (message: string = 'Bad request') {
    super(400, message);
  }
}
