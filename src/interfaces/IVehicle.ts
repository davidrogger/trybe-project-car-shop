import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.union([z.boolean(), z.undefined()]),
  buyValue: z.number().int().positive(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

export {
  IVehicle,
  vehicleZodSchema,
};
