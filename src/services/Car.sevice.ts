import { carZodSchema, ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  constructor(private car:IModel<ICar>) { }

  async create(payload:unknown):Promise<ICar> {
    const checkPayload = carZodSchema.safeParse(payload);
    if (!checkPayload.success) {
      throw checkPayload.error;
    }

    return this.car.create(checkPayload.data);
  }

  async read():Promise<ICar[]> {
    return this.car.read();
  }
}

export default CarService;
