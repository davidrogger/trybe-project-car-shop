import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import ShopService from './Shop.service';

class CarService extends ShopService<ICar> {
  constructor(
    private car:IModel<ICar>,
  ) {
    super(car, carZodSchema);
  }
}

export default CarService;
