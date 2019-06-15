// packages
import * as cors from 'cors';
import * as express from 'express';
// config
// import { apiConfig } from '../configs';


export class BaseRoutes {
  public router: express.Router = express.Router();

  // allowed origins for CORS validation
  private allowedOrigins = ['http://localhost:4200'];
  // CORS options
  private corsOptions: cors.CorsOptions;

  constructor(enableCors: boolean) {
    if (enableCors) {
      // @TODO: set cors options regarding app configuration
      this.router.use('*', cors(this.corsOptions));
    }
  }
}
