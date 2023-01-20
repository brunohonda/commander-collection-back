import { Request, Response } from 'express';
import { Repository } from 'typeorm';

import { User } from '../../entity/user/User';
import { UserRepository } from './../../entity/user/User.repository';

export class AuthController {
  constructor (
    private readonly userRepository: Repository<User>
  ) {}

  async login (req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    try {
      const userDB = await this.userRepository.findOneByOrFail({ username });
      const user = this.userRepository.create({ username, password, salt: userDB.salt });
      user.hashPassword();

      if (user.username !== userDB.username || user.password !== userDB.password) {
        res.status(401).json({
          message: 'Access denied'
        });
        return;
      }

      res.json({ token: '' });
    } catch (error: any) {
      res.status(401).json({
        message: 'Access denied'
      });
    }
  }
}

export const AuthControllerFactory = (): AuthController => new AuthController(
  UserRepository
);
