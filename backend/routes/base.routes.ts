// packages
import * as cors from 'cors';
import * as express from 'express';


export class BaseRoutes {
  public router: express.Router = express.Router();

  // allowed origins for CORS validation
  private allowedOrigins = [];
  // CORS options
  private corsOptions: cors.CorsOptions;

  constructor() {
    // @TODO: set cors options regarding app configuration
    this.router.use('*', cors(this.corsOptions));
  }
}
