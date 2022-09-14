// código baseado no catalog do course

export enum ErrorTypes {
  InvalidInput = 'InvalidInput',
}

type ErrorResponseObject = {
  httpStatus: number
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  InvalidInput: {
    httpStatus: 400,
  },
};
