import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

// test itens
import CarService from '../../../services/Car.sevice';

// cars Mocked
import {
  validCar,
  carWithId,
  updatedCarWithId,
  validUpdatedCar,
  zodParsedMock,
} from '../../mocks/carMock';

// External methods mocked
import CarModel from '../../../models/Car.model';
import mongoose from 'mongoose';
import { carZodSchema } from '../../../interfaces/ICar'

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

  describe('When using service to get a car by its "ID"', () => {
    it('Should return the car when found', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      sinon.stub(carModel, 'readOne').resolves(carWithId);

      const carFound = await carService.readOne('ID_FOUND');
      expect(carFound).to.be.deep.equal(carWithId);
    });

    it('Should throw an error if not found', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      sinon.stub(carModel, 'readOne').resolves(null);
      let carNotFound;
      try {
        await carService.readOne('ID_NOT_FOUND');
      } catch (error:any) {
        carNotFound = error;
      }

      expect(carNotFound).not.to.be.undefined;
    });

    it('Should throw an error if the "ID" is invalid', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let invalidId;
      try {
        await carService.readOne('ID_INVALID');
      } catch (error:any) {
        invalidId = error;
      }

      expect(invalidId).not.to.be.undefined; 
    });
  });

  describe('When using service to update a car by its "ID"', () => {
    it('Should return the car updated when found', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      // sinon.stub(carZodSchema, 'safeParse').returns(zodParsedMock);
      sinon.stub(carModel, 'update').resolves(updatedCarWithId);

      const carUpdated = await carService.update('ID_FOUND', validUpdatedCar);
      expect(carUpdated).to.be.deep.equal(updatedCarWithId);
    });

    it('Should throw an error if not found', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(true);
      sinon.stub(carModel, 'readOne').resolves(null);
      let carNotFound;
      try {
        await carService.update('ID_NOT_FOUND', validUpdatedCar);
      } catch (error:any) {
        carNotFound = error;
      }

      expect(carNotFound).not.to.be.undefined;
    });

    it('Should throw an error if the "ID" is invalid', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let invalidId;
      try {
        await carService.update('ID_INVALID', validUpdatedCar);
      } catch (error:any) {
        invalidId = error;
      }

      expect(invalidId).not.to.be.undefined; 
    });

    it('Should throw an error if "payload" miss any field required to updated', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let invalidField;
      try {
        await carService.update('ID_INVALID', {});
      } catch (error:any) {
        invalidField = error;
      }

      expect(invalidField).not.to.be.undefined; 
    });
  });
});