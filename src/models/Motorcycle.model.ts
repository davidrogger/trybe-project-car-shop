import { model as mongooseModel, Schema } from 'mongoose';
import MongoModel from './Mongo.model';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const motorcycleMongooseSchema = new Schema<IMotorcycle>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    category: String,
    engineCapacity: Number,
  },
  { versionKey: false },
);

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor() {
    const motorcycleModel = mongooseModel('Motorcycle', motorcycleMongooseSchema);
    super(motorcycleModel);
  }
}

export default MotorcycleModel;
