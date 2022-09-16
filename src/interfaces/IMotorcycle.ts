import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const addMotorcycleZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

const motorcycleZodSchema = vehicleZodSchema.merge(addMotorcycleZodSchema);

type IMotorcycle = z.infer<typeof motorcycleZodSchema>;

export {
  IMotorcycle,
  motorcycleZodSchema,
};
