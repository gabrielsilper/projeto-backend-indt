import { Request, Response, NextFunction } from 'express';
import { SensorNotFound } from 'errors/SensorNotFound';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof SensorNotFound) {
    return res.status(404).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: 'Internal server error',
  });
};
