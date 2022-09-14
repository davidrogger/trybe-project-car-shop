import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

class CarController {
  constructor(private service:IService<ICar>) {}

  async create(req:Request & { body: ICar }, res:Response<ICar>) {
    const newCar = await this.service.create(req.body);
    res.status(201).json(newCar);
  }
}

export default CarController;
