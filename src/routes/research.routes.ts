import ResearcherController from 'controllers/researcher-controller';
import { Router } from 'express';
import { validateBody } from 'middlewares/validate-body';
import ResearcherRepository from 'repositories/researcher-repository';
import { createResearcherSchema } from 'schemas/create-researcher-schema';
import ResearcherService from 'services/researcher-service';
import Bcrypt from 'utils/bcrypt';

const researcherRouter = Router();
const researcherService = new ResearcherService(new ResearcherRepository(), new Bcrypt());
const researcherController = new ResearcherController(researcherService);

researcherRouter.get('/', (req, res) => researcherController.getAll(req, res));
researcherRouter.post('/', validateBody(createResearcherSchema), (req, res) => researcherController.create(req, res));
researcherRouter.get('/:id', (req, res) => researcherController.getById(req, res));
researcherRouter.put('/:id', (req, res) => researcherController.update(req, res));
researcherRouter.delete('/:id', (req, res) => researcherController.delete(req, res));

export default researcherRouter;
