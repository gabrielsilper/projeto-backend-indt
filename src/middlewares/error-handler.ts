import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
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

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      })),
    });
  }

  return res.status(500).json({
    message: 'Internal server error',
  });
};
