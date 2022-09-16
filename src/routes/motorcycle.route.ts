import { Router } from 'express';
import MotorcycleModel from '../models/Motorcycle.model';
import MotorcycleService from '../services/Motorcycle.service';
import MotorcycleController from '../controllers/Motorcycle.controller';

const route = Router();
const motorcycleMongooseModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleMongooseModel);
const motorcycleController = new MotorcycleController(motorcycleService);

route.get('/:id', (req, res) => motorcycleController.readOne(req, res));
route.put('/:id', (req, res) => motorcycleController.update(req, res));
route.delete('/:id', (req, res) => motorcycleController.delete(req, res));
route.post('/', (req, res) => motorcycleController.create(req, res));
route.get('/', (req, res) => motorcycleController.read(req, res));

export default route;