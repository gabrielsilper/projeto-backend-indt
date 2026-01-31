import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { SensorNotFoundError } from 'errors/sensor-not-found.error';
import { SensorAlreadyExistsError } from 'errors/sensor-already-exists.error';
import { ResearcherNotFoundError } from 'errors/researcher-not-found.error';
import { EmailAlreadyExistsError } from 'errors/email-already-exists-error';
import { RegistrationAlreadyExistsError } from 'errors/registration-already-exists-error';

// TODO - Colocar uma criação de log desse erros com winston e criar um tabela para armazenar as informações
export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (
    error instanceof SensorNotFoundError ||
    error instanceof ResearcherNotFoundError
  ) {
    return res.status(404).json({
      message: error.message,
    });
  }

  if (
    error instanceof SensorAlreadyExistsError ||
    error instanceof EmailAlreadyExistsError ||
    error instanceof RegistrationAlreadyExistsError
  ) {
    return res.status(409).json({
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
