import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

// cars Mocked
import {
  validCar,
  carWithId,
} from '../../mocks/carMock';


describe('Rota "/cars"', () => {
  const carModel = new CarModel();

  describe('When add a car with success', () => {
    it('Should return data record with an id', async () => {
      const addCarModel = await carModel.create(validCar);
      expect(addCarModel).to.be.deep.equal(carWithId);
    });

  });
});