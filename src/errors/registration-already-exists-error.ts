export class RegistrationAlreadyExistsError extends Error {
  constructor(message: string = 'Researcher with this registration already exists!') {
    super(message);
  }
}
