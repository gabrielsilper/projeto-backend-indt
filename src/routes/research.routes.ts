import ResearcherController from 'controllers/researcher-controller';
import { Router } from 'express';
import ResearcherRepository from 'repositories/researcher-repository';
import ResearcherService from 'services/researcher-service';

const researcherRouter = Router();
const researcherService = new ResearcherService(new ResearcherRepository());
const researcherController = new ResearcherController(researcherService);

researcherRouter.get('/', (req, res) => researcherController.getAll(req, res));
researcherRouter.post('/', (req, res) => researcherController.create(req, res));
researcherRouter.get('/:id', (req, res) => researcherController.getById(req, res));
researcherRouter.put('/:id', (req, res) => researcherController.update(req, res));
researcherRouter.delete('/:id', (req, res) => researcherController.delete(req, res));

export default researcherRouter;
