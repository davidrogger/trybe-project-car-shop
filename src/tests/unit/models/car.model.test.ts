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

describe('Rota "/cars"', () => {
  afterEach(() => sinon.restore());

  const carModel = new CarModel();

  describe('When using POST to add a car with success', () => {
    it('Should return the registered payload with an id', async () => {
      sinon.stub(Model, 'create').resolves(carWithId);

      const addCarModel = await carModel.create(validCar);
      expect(addCarModel).to.be.deep.equal(carWithId);
    });

  });

  describe('When using GET to get all cars with success', () => {
    it('Should return a list with all cars', async () => {
      sinon.stub(Model, 'find').resolves([carWithId]);

      const listCars = await carModel.read();
      expect(listCars).to.be.equal([carWithId]);
    });
  });
});