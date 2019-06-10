// packages
import * as cors from 'cors';
import * as express from 'express';
// config
// import { apiConfig } from '../configs';


export class BaseRoutes {
  public router: express.Router = express.Router();

  constructor() {
    console.log('BaseRoutes init');
    //  options for cors midddleware
    const corsOptions: cors.CorsOptions = {
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'X-Jiro-Request-Tag'],
      origin: '*',
      methods: 'GET,POST,PUT,DELETE',
      // credentials: true,
      // preflightContinue: true,
    };

    // apply cors in all requests
    this.router.all('*', cors(corsOptions));
  }
}
