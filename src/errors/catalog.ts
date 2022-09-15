// código baseado no catalog do course

export enum ErrorTypes {
  InvalidInput = 'InvalidInput',
  NotFound = 'NotFound',
  invalidId = 'invalidId',
}

type ErrorResponseObject = {
  httpStatus: number
  error?: string;
  message?: string;
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  InvalidInput: {
    httpStatus: 400,
  },
  invalidId: {
    httpStatus: 400,
    error: 'Id must have 24 hexadecimal characters',
  },
  NotFound: {
    httpStatus: 404,
    error: 'Object not found',
  },
};
