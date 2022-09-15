import { isValidObjectId } from 'mongoose';
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
    if (!isValidObjectId(id)) throw new Error('invalidId');

    const carFound = await this.car.readOne(id);

    if (!carFound) throw new Error('NotFound');

    return carFound;
  }

  public async update(id:string, payload:unknown):Promise<ICar> {
    if (!isValidObjectId(id)) throw new Error('invalidId');
    
    const payloadValidation = carZodSchema.safeParse(payload);

    if (!payloadValidation.success) throw payloadValidation.error;

    const updated = await this.car.update(id, payloadValidation.data);

    if (!updated) throw new Error('NotFound');

    return updated;
  }
}

export default CarService;
