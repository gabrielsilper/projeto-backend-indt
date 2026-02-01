import Encrypter from 'interfaces/encrypter';
import bcrypt from 'bcrypt';

export default class Bcrypt implements Encrypter {
  private bcrypt = bcrypt;

  encrypt(password: string): Promise<string> {
    return this.bcrypt.hash(password, 10);
  }
  compare(password: string, hash: string): Promise<boolean> {
    return this.bcrypt.compare(password, hash);
  }
}
