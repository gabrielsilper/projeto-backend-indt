export class ResearcherNotFoundError extends Error {
  constructor(message: string = 'Researcher not found!') {
    super(message);
  }
}
