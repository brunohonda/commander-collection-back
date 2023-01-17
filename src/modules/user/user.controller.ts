import { Request, Response } from 'express';
import { Repository } from 'typeorm';

import { User } from '../../entity/user/User';
import { UserRepository } from '../../entity/user/User.repository';

export class UserController {
  constructor (
    private readonly repository: Repository<User>
  ) {}

  async create (req: Request, res: Response): Promise<void> {
    try {
      const entity = this.repository.create(req.body as User);
      await this.repository.save(entity);
      res.status(204).end();
    } catch {
      res.status(500).json({ message: 'Not created' });
    }
  }
}

export const UserControllerFactory = (): UserController => new UserController(UserRepository);
