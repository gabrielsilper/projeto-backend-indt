export class EmailAlreadyExistsError extends Error {
  constructor(message: string = 'Researcher with this email already exists!') {
    super(message);
  }
}
