import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import controllerExample from '../controllers/controllerExample';
import postClient from '../controllers/postClient';
import { ClientRequest } from '../model/Client';

const RESOURCE = '/example';

const routerExample = Router();

routerExample.get(`${RESOURCE}/get`, async (req: Request, res: Response, next: NextFunction) => {
  const { search } = req.query;

  try {
    const responseData = await controllerExample(<string>search);

    if (!responseData) {
      res.status(StatusCodes.NO_CONTENT).send();
    } else {
      res.status(StatusCodes.OK).json(responseData);
    }
    next();
  } catch (error) {
    console.log(`ERRO::: Na rota /example/get`);
    next(error);
  }
});

routerExample.post(`${RESOURCE}/client`, async (req, res: Response, next: NextFunction) => {
  try {
    const request: ClientRequest = req.body;

    const responseData = await postClient(request);

    if (!responseData) {
      res.status(StatusCodes.NO_CONTENT).send();
    } else {
      res.status(StatusCodes.OK).json(responseData);
    }
    next();
  } catch (error) {
    console.log(`ERRO::: Na rota /example/client`);
    next(error);
  }
});

export default routerExample;
