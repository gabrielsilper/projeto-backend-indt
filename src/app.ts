import { appDataSource } from 'database/data-source';
import express from 'express';
import { DataSource } from 'typeorm';

export default class App {
  public readonly server: express.Express;
  public readonly db: DataSource;

  constructor() {
    this.server = express();
    this.db = appDataSource;
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
    this.db
      .initialize()
      .then(() => {
        console.log('Initialized database connection successfully.');
        this.server.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      })
      .catch((error) => {
        console.error('Error connecting to the database:', error);
      });
  }
}
