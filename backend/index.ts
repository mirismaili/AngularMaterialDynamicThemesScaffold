// packages
import * as bodyParser from 'body-parser';
import * as express from 'express';
// routes
import { serverRoutes } from './routes/index';


// create a server
const server: express.Application = express();

// support application/json
server.use(bodyParser.json());
// support application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));

// Routing
server.use('/', serverRoutes);

// initialize the server
server.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening');
});
