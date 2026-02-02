import { randomUUID } from 'crypto';

export default class IdentifierUtils {
  static generateUUID(): string {
    return randomUUID();
  }
}
