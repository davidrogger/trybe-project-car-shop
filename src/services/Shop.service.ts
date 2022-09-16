import { isValidObjectId } from 'mongoose';
import { ZodSchema } from 'zod';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

class ShopService<T> implements IService<T> {
  constructor(
    private model:IModel<T>,
    private zodSchema:ZodSchema<T>,
  ) { }

  public async create(payload:unknown):Promise<T> {
    const checkPayload = this.zodSchema.safeParse(payload);
    if (!checkPayload.success) {
      throw checkPayload.error;
    }

    return this.model.create(checkPayload.data);
  }
  
  public async read():Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id:string):Promise<T> {
    if (!isValidObjectId(id)) throw new Error('invalidId');

    const carFound = await this.model.readOne(id);

    if (!carFound) throw new Error('NotFound');

    return carFound;
  }

  public async update(id:string, payload:unknown):Promise<T> {
    if (!isValidObjectId(id)) throw new Error('invalidId');
    
    const payloadValidation = this.zodSchema.safeParse(payload);

    if (!payloadValidation.success) throw payloadValidation.error;

    const updated = await this.model.update(id, payloadValidation.data);

    if (!updated) throw new Error('NotFound');

    return updated;
  }

  public async delete(id: string): Promise<{ message: string }> {
    if (!isValidObjectId(id)) throw new Error('invalidId');

    const deleted = await this.model.delete(id);

    if (!deleted) throw new Error('NotFound');

    return { message: `${id} deleted with success!` };
  }
}

export default ShopService;
