import { Router } from 'express';
import CarModel from '../models/Car.model';
import CarService from '../services/Car.sevice';
import CarController from '../controllers/Car.controller';

const route = Router();
const carMongooseModel = new CarModel();
const carService = new CarService(carMongooseModel);
const carController = new CarController(carService);

route.post('/', (req, res) => carController.create(req, res));

export default route;