import express from 'express';

import { userRouting } from './modules/user/user.routing';

export const router = express.Router({
  caseSensitive: true
});

router.use('/user', userRouting);
