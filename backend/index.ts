// packages
import * as bodyParser from 'body-parser';
import * as express from 'express';
// routes
import { serverRoutes } from './routes';
// interfaces
import { AddressInfo } from './interfaces';


// create a server
const server: express.Application = express();

// support application/json
server.use(bodyParser.json());
// support application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));

// Routing
server.use('/api', serverRoutes);

// initialize the server
const serverRunning = server.listen(process.env.PORT || 3000, () => {
  const addressInfo = serverRunning.address() as AddressInfo;
  console.log('Express server listening: ', addressInfo);
});
