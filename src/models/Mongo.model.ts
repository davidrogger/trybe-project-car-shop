import { Model } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class MongoModel<T> implements IModel<T> {
  constructor(private model:Model<T>) {}

  public async create(payload:T):Promise<T> {
    const addPayload = await this.model.create(payload);

    return {
      _id: addPayload._id,
      ...payload,
    };
  }

  public async read():Promise<T[]> {
    return this.model.find();
  }

  public async readOne(id: string): Promise<T | null> {
    const car = await this.model.findById(id);
    return car;
  }

  public async update(id: string, payload: T): Promise<T | null> {
    return {};
  }
}

export default MongoModel;
