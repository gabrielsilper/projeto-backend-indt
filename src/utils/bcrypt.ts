import IEncrypterService from 'interfaces/encrypter-service';
import bcrypt from 'bcrypt';

export default class Bcrypt implements IEncrypterService {
  private bcrypt = bcrypt;

  encrypt(password: string): Promise<string> {
    return this.bcrypt.hash(password, 10);
  }
  compare(password: string, hash: string): Promise<boolean> {
    return this.bcrypt.compare(password, hash);
  }
}
