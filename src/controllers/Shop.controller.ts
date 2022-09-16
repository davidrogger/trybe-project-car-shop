import { Request, Response } from 'express';
import IService from '../interfaces/IService';

class ShopController<T> {
  constructor(private service:IService<T>) {}

  async create(req:Request & { body: T }, res:Response<T>) {
    const newItem = await this.service.create(req.body);
    return res.status(201).json(newItem);
  }

  async read(_req: Request, res:Response<T[]>) {
    const listItem = await this.service.read();
    return res.status(200).json(listItem);
  }

  async readOne(req: Request, res: Response<T>) {
    const item = await this.service.readOne(req.params.id);
    res.status(200).json(item);
  }

  async update(req: Request, res: Response<T>) {
    const { id } = req.params;
    const payload = req.body;

    const updatedItem = await this.service.update(id, payload);
    res.status(200).json(updatedItem);
  }

  public async delete(req: Request, res: Response) {
    await this.service.delete(req.params.id);
    res.status(204).json();
  }
}

export default ShopController;
