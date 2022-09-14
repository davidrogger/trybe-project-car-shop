import { Model } from 'mongoose';
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
}

export default MongoModel;
