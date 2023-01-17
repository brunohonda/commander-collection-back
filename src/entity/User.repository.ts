import { AppDataSource } from '../data-source';
import { User } from './User';

export const UserRepository = AppDataSource.getRepository(User);
