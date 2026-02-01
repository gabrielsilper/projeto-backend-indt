import ResearcherService from 'services/researcher-service';
import { Request, Response } from 'express';
import ResearcherCreationDto from 'dtos/researcher-creation-dto';

export default class ResearcherController {
  constructor(private researcherService: ResearcherService) {}

  async getAll(_req: Request, res: Response) {
    const researchers = await this.researcherService.getAll();
    const researchersDtos = researchers.map((researcher) => researcher.toDto());
    return res.json(researchersDtos);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const researcher = await this.researcherService.getById(id as string);
    return res.json(researcher.toDto());
  }

  async create(req: Request, res: Response) {
    const researcherData = req.body as ResearcherCreationDto;
    const newResearcher = await this.researcherService.create(researcherData);
    return res.status(201).json(newResearcher.toDto());
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const researcherData = req.body as Partial<ResearcherCreationDto>;
    const updatedResearcher = await this.researcherService.update(
      id as string,
      researcherData,
    );
    return res.json(updatedResearcher.toDto());
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.researcherService.delete(id as string);
    return res.status(204).send();
  }
}
