export class SensorNotFoundError extends Error {
  constructor(message: string = 'Sensor not found!') {
    super(message);
  }
}
