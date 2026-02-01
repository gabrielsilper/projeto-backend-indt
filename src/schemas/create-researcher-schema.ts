import DateUtils from 'utils/date-utils';
import { z } from 'zod';

export const createResearcherSchema = z.object({
  registration: z
    .string('Registration is required and must be a string')
    .length(12, 'Registration must have exactly 12 characters')
    .regex(
      /^[a-zA-Z0-9]+$/,
      'Registration can only contain letters and numbers',
    ),

  name: z
    .string('Name is required and must be a string')
    .min(3, 'Name must have at least 3 characters')
    .max(50, 'Name must have at most 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

  email: z
    .string('Email is required and must be a string')
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must be a valid email address',
    ),

  password: z
    .string('Password is required and must be a string')
    .min(8, 'Password must have at least 8 characters')
    .max(25, 'Password must have at most 25 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    ),

  specialty: z
    .string('Specialty must be a string')
    .min(6, 'Specialty must have at least 6 characters')
    .max(50, 'Specialty must have at most 50 characters')
    .optional(),

  degree: z
    .number('Degree is required and must be a number. 0 - INDEFINIDO, 1 - GRADUACAO, 2 - ESPECIALIZACAO, 3 - MESTRADO, 4 - DOUTORADO')
    .int('Degree must be an integer')
    .min(0, 'Degree must be at least 0. 0 - INDEFINIDO, 1 - GRADUACAO, 2 - ESPECIALIZACAO, 3 - MESTRADO, 4 - DOUTORADO')
    .max(4, 'Degree must be at most 4. 0 - INDEFINIDO, 1 - GRADUACAO, 2 - ESPECIALIZACAO, 3 - MESTRADO, 4 - DOUTORADO'),

  research: z
    .string('Research must be a string')
    .min(10, 'Research must have at least 10 characters')
    .max(100, 'Research must have at most 100 characters')
    .optional(),

  birthDate: z.coerce.date(
    'Birth date is required and must be a Date. Format: YYYY-MM-DD (ISO 8601)',
  ).refine(date => DateUtils.isAdult(date), 'Researcher must be at least 18 years old'),
});
