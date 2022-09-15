import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

class CarController {
  constructor(private service:IService<ICar>) {}

  async create(req:Request & { body: ICar }, res:Response<ICar>) {
    const newCar = await this.service.create(req.body);
    return res.status(201).json(newCar);
  }

  async read(_req: Request, res:Response<ICar[]>) {
    const listCar = await this.service.read();
    return res.status(200).json(listCar);
  }

  async readOne(req: Request, res: Response<ICar>) {
    const car = await this.service.readOne(req.params.id);
    res.status(200).json(car);
  }
}

export default CarController;
