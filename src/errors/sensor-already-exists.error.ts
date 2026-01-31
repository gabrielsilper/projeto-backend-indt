export class SensorAlreadyExistsError extends Error {
  constructor(message: string = 'Sensor with this serial number already exists!') {
    super(message);
  }
}
