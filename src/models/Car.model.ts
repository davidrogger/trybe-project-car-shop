import { model as mongooseModel, Schema } from 'mongoose';
import MongoModel from './Mongo.model';
import { ICar } from '../interfaces/ICar';

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel extends MongoModel<ICar> {
  constructor() {
    const carModel = mongooseModel('Car', carMongooseSchema);
    super(carModel);
  }
}

export default CarModel;
