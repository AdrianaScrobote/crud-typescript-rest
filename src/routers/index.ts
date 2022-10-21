import { Router } from 'express';
import healthCheckRouter from './healthCheck';
import routerExample from './routerExample';

export default Router().use(healthCheckRouter).use(routerExample);
