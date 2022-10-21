import express from 'express';
import router from './routers';
import appConfig from './config';
import errorHandler from './errorHandler';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/spec.json';

const app = express();

const config = appConfig();
app.locals.config = config;

app.use(express.json());
app.use(router);
app.use(errorHandler);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export function start(port: number | string): Promise<void> {
  return new Promise<void>((resolve) => {
    app.listen(port, () => resolve());
  });
}
