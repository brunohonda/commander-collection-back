import { Request, Response } from 'express';
import { Repository } from 'typeorm';

import { User } from '../../entity/User';
import { UserRepository } from '../../entity/User.repository';

class UserController {
  constructor (
    private readonly repository: Repository<User>
  ) {}

  async create (req: Request, res: Response): Promise<void> {
    try {
      const entity = this.repository.create(req.body);
      await this.repository.save(entity);
      res.status(204).end();
    } catch {
      res.status(500).json({ message: 'Not created' });
    }
  }
}

export const UserControllerFactory = (): UserController => new UserController(UserRepository);
