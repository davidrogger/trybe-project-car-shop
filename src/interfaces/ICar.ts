import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const addCarZodSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

const carZodSchema = vehicleZodSchema.merge(addCarZodSchema);

type ICar = z.infer<typeof carZodSchema>;

export {
  // eslint-disable-next-line
  ICar,
};