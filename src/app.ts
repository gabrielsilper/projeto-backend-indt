import express from 'express';

export default class App {
  public readonly server: express.Express;

  constructor() {
    this.server = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.get('/api/v1/live', (req, res) => {
      res.send('INDT Reserve Monitor API v1 is live!');
    });
  }

  public start(PORT: string | number): void {
    this.server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}