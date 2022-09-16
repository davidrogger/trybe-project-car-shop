import { motorcycleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import ShopService from './Shop.service';

class MotorcycleService extends ShopService<IMotorcycle> {
  constructor(
    private car:IModel<IMotorcycle>,
  ) {
    super(car, motorcycleZodSchema);
  }
}

export default MotorcycleService;
