import { Model, UpdateQuery } from 'mongoose';
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

    if (!car) return null;
    return car;
  }

  public async update(id: string, payload: T): Promise<T | null> {
    const updated = await this.model.findByIdAndUpdate(
      { _id: id },
      payload as UpdateQuery<T>,
      { new: true },
    );

    if (!updated) return null;
    return updated;
  }

  public async delete(id: string): Promise<T | null> {
    
  }
}

export default MongoModel;
