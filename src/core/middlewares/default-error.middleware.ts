import { NextFunction, Request, Response } from 'express';

export function errorHandler (error: any, req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    return next(error);
  }

  const code = error.code ?? 500;
  res.status(code)
    .json({
      code,
      message: error.message
    });
  next();
}
