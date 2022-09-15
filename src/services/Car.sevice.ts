import { carZodSchema, ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  constructor(private car:IModel<ICar>) { }

  public async create(payload:unknown):Promise<ICar> {
    const checkPayload = carZodSchema.safeParse(payload);
    if (!checkPayload.success) {
      throw checkPayload.error;
    }

    return this.car.create(checkPayload.data);
  }
  
  public async read():Promise<ICar[]> {
    return this.car.read();
  }

  public async readOne(id:string):Promise<ICar> {
    return {};
  }
}

export default CarService;
