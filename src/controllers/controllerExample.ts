import validateRequest from '../controllers/schemas/controllerExample.schema';

export default async function getExampleController(search: string | undefined) {
  try {
    const validationError = validateRequest({ search });

    if (validationError) return await Promise.reject(validationError);

    //add your architecture (MVC, Clean, ...)
    return 'ok';
  } catch (error) {
    throw error;
  }
}
