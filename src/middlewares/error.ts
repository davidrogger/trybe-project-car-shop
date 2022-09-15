import { ErrorRequestHandler, Response } from 'express';
import { ZodError } from 'zod';
import { errorCatalog, ErrorTypes } from '../errors/catalog';

const errorHandler:ErrorRequestHandler = (err: Error | ZodError, _req, res: Response, _next) => {
  if (err instanceof ZodError) return res.status(400).json({ message: err.issues });

  const messageAsErrorType = err.message as ErrorTypes;

  const { httpStatus, ...info } = errorCatalog[messageAsErrorType];

  return res.status(httpStatus || 500).json({ ...info });
};

export default errorHandler;
