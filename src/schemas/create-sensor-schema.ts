import { z } from 'zod';

export const createSensorSchema = z.object({
  name: z
    .string('Name is required and must be a string')
    .min(3, 'Name must have at least 3 characters')
    .max(50, 'Name must have at most 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

  serialNumber: z
    .string('Serial number is required and must be a string')
    .length(10, 'Serial number must have exactly 10 characters')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)/,
      'Serial number must contain uppercase letters and numbers',
    ),

  description: z
    .string()
    .min(10, 'Description must have at least 10 characters')
    .max(120, 'Description must have at most 120 characters')
    .optional(),
});
