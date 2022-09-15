import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

// test itens
import CarModel from '../../../models/Car.model';

// cars Mocked
import {
  validCar,
  carWithId,
} from '../../mocks/carMock';

// External methods mocked
import { Model } from 'mongoose';

describe('Testing CarModel', () => {
  afterEach(() => sinon.restore());

  const carModel = new CarModel();

  describe('When using model to add a car with success', () => {
    it('Should return the registered payload with an id', async () => {
      sinon.stub(Model, 'create').resolves(carWithId);

      const addCarModel = await carModel.create(validCar);
      expect(addCarModel).to.be.deep.equal(carWithId);
    });

  });

  describe('When using model to get all cars with success', () => {
    it('Should return a list with all cars', async () => {
      sinon.stub(Model, 'find').resolves([carWithId]);

      const listCars = await carModel.read();
      expect(listCars).to.be.deep.equal([carWithId]);
    });
  });

  describe('When using model to get a car by its "ID"', () => {
    it('Should return the car data when the id is found', async () => {
      sinon.stub(Model, 'findById').resolves(carWithId)
      const carFound = await carModel.readOne('ID_FOUND');
      expect(carFound).to.be.deep.equal(carWithId);
    });

    it('Should return "null" when the "ID" isn\'t found', async () => {
      sinon.stub(Model, 'findById').resolves(null)
      const carNotFound = await carModel.readOne('ID_NOT_FOUND');
      expect(carNotFound).to.be.null;
    });
  });
});