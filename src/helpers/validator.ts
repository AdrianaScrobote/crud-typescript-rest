import { StatusCodes } from 'http-status-codes';

class InvalidInputError extends Error {
  public readonly name;

  public readonly message;

  public readonly status;

  constructor(message: string, status: number) {
    super();
    this.name = 'Invalid Input Error';
    this.message = message;
    this.status = status;
  }
}

export function validator(configSchema: any, data: any) {
  const { error } = configSchema.validate(data, { abortEarly: false });

  if (error) {
    const message = error.message ?? 'Validation error';
    const validationError = new InvalidInputError(message, StatusCodes.BAD_REQUEST);

    return validationError;
  }
}
