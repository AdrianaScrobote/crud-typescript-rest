import { StatusCodes } from 'http-status-codes';

export default async function errorHandler(error: any, req: any, res: any, next: any) {
  const statusCode = error.status ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message ?? 'Internal Server Error';

  res.status(statusCode).json({ message });
}
