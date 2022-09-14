import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

// test itens
import CarController from '../../../controllers/Car.controller';

// cars Mocked
import {
  validCar,
  carWithId,
} from '../../mocks/carMock';

// External methods mocked
import CarModel from '../../../models/Car.model';
import CarService from '../../../services/Car.sevice';
import { Request, Response } from 'express';

describe('Testing CarController', () => {
  afterEach(() => sinon.restore());

  beforeEach(() => {
    response.json = sinon.stub().returns(response);
    response.status = sinon.stub().returns(response);
  });

  const request = {} as Request;
  const response = {} as Response;

  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  describe('When requesting to add a car with success', () => {
    it('Should return the registered payload with an id and a response 201', async () => {
      sinon.stub(carService, 'create').resolves(carWithId)
      request.body = validCar;

      await carController.create(request, response);
      expect((response.status  as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((response.json  as sinon.SinonStub).calledWith(carWithId)).to.be.true;
    });

  });

  describe('When requesting to get all cars in the route', () => {
    it('Should return all the cars in the database and a response 200', async () => {
      sinon.stub(carService, 'read').resolves([carWithId])

      await carController.read(request, response);
      expect((response.status  as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json  as sinon.SinonStub).calledWith([carWithId])).to.be.true;
    });
  });
});
