export class SensorNotFound extends Error {
  constructor(message: string = 'Sensor not found!') {
    super(message);
  }
}
