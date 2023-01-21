export class CustomError extends Error {
  constructor (
    public readonly code: number,
    public readonly message: string
  ) {
    super(message);
  }
}
