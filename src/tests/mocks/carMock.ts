// Reaproveitando parcialmente mock Criado pela trybe.

export const validCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const carWithId = {
  _id: '4edd40c86762e0fb12000003',
  ...validCar
}

export const validUpdatedCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3000,
  seatsQty: 2,
  doorsQty: 2
};

export const updatedCarWithId = {
  _id: '4edd40c86762e0fb12000003',
  ...validUpdatedCar
}

export const zodParsedMock = {
  success: false,
  data: {},
}

export const updatedCar = {
  model: 'Uno da Escada',
  year: 1966,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};
