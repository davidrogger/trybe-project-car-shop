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

describe('Rota "/cars"', () => {
  afterEach(() => sinon.restore());

  const carModel = new CarModel();
  const carService = new CarService(carModel);

  describe('When add a car with success', () => {
    it('Should return the registered payload with an id', async () => {
      sinon.stub(carModel, 'create').resolves(carWithId);

      const addCarService = await carService.create(validCar);
      expect(addCarService).to.be.deep.equal(carWithId);
    });

  });
});