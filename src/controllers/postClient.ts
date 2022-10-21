import { ClientRequest } from '../model/Client';
// import validateRequest from '../controllers/schemas/controllerExample.schema';

export default async function postClient(client: ClientRequest) {
  try {
    // const validationError = validateRequest({ search });

    // if (validationError) return await Promise.reject(validationError);

    //add your architecture (MVC, Clean, ...)
    console.log('client:', client);

    return 'ok';
  } catch (error) {
    throw error;
  }
}
