import express from 'express';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-doc.json';

import errorHandler from './middlewares/error';
import carRoute from './routes/car.route';
import motorcycleRoute from './routes/motorcycle.route';

const app = express();

app.use(express.json());
app.use('/cars', carRoute);
app.use('/motorcycles', motorcycleRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorHandler);

export default app;
