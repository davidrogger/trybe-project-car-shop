import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

// test itens
import CarService from '../../../services/Car.sevice';

// cars Mocked
import {
  validCar,
  carWithId,
} from '../../mocks/carMock';

// External methods mocked
import CarModel from '../../../models/Car.model';

describe('Testing CarService', () => {
  afterEach(() => sinon.restore());

  const carModel = new CarModel();
  const carService = new CarService(carModel);

  describe('When using service to add a car with success', () => {
    it('Should return the registered payload with an id', async () => {
      sinon.stub(carModel, 'create').resolves(carWithId);

      const addCarService = await carService.create(validCar);
      expect(addCarService).to.be.deep.equal(carWithId);
    });

  });

  describe('When using service to get all cars', () => {
    it('Should return a list with all cars', async () => {
      sinon.stub(carModel, 'read').resolves([carWithId]);

      const listCars = await carService.read();
      expect(listCars).to.be.deep.equal([carWithId]);
    });
  });
});