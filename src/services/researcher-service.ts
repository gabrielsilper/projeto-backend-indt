import ResearcherCreationDto from 'dtos/researcher-creation-dto';
import { EmailAlreadyExistsError } from 'errors/email-already-exists-error';
import { RegistrationAlreadyExistsError } from 'errors/registration-already-exists-error';
import { ResearcherNotFoundError } from 'errors/researcher-not-found.error';
import Encrypter from 'interfaces/encrypter';
import ResearcherRepository from 'repositories/researcher-repository';

export default class ResearcherService {
  constructor(
    private researcherRepository: ResearcherRepository,
    private encrypter: Encrypter,
  ) {}

  async getAll() {
    return this.researcherRepository.find();
  }

  async getById(id: string) {
    const researcher = await this.researcherRepository.findOneBy({ id });

    if (!researcher) {
      throw new ResearcherNotFoundError();
    }

    return researcher;
  }

  async create(researcherData: ResearcherCreationDto) {
    const registrationAlreadyExists = await this.researcherRepository.existsBy({
      registration: researcherData.registration,
    });

    if (registrationAlreadyExists) {
      throw new RegistrationAlreadyExistsError();
    }

    const emailAlreadyExists = await this.researcherRepository.existsBy({
      email: researcherData.email,
    });

    if (emailAlreadyExists) {
      throw new EmailAlreadyExistsError();
    }

    const password = await this.encrypter.encrypt(researcherData.password);

    const researcher = this.researcherRepository.create({...researcherData, password});
    return this.researcherRepository.save(researcher);
  }

  async update(id: string, researcherData: Partial<ResearcherCreationDto>) {
    const researcher = await this.getById(id);
    const researcherUpdated = this.researcherRepository.merge(
      researcher,
      researcherData,
    );
    return this.researcherRepository.save(researcherUpdated);
  }

  async delete(id: string) {
    const researcher = await this.getById(id);
    await this.researcherRepository.remove(researcher);
  }
}
