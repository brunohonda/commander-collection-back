import express from 'express';

import { UserControllerFactory } from './user.controller';

export const userRouting = express.Router();

const controller = UserControllerFactory();

userRouting
  .post('/', controller.create.bind(controller));
