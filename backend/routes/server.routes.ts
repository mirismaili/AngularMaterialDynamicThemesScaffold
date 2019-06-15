// packages
import { Request, Response } from 'express';
import * as fs from 'fs';
// routes
import { BaseRoutes } from '../routes/base.routes'; // don't import from barrel
// interfaces
import { IkojiRoutesParams } from '../interfaces';

class ServerRoutes extends BaseRoutes {
  constructor() {
    // enable/disable CORS
    super(true);
    this.setRoutes();
  }

  /**
   * Sets the routes to the Express router
   * @returns void
   * @private
   * @memberof ServerRoutes
   */
  private setRoutes(): void {
    const routes: IkojiRoutesParams[] = this.getRoutes();

    // set the routes regarding the method
    routes.map(({name, route, method, isProtected}) => {
      switch(method) {
        case 'GET':
          this.router.get(route, (req: Request, res: Response) => {
            this.processRequest(name, isProtected, req, res);
          });
          break;
        case 'POST':
          this.router.post(route, (req: Request, res: Response) => {
            this.processRequest(name, isProtected, req, res);
          });
          break;
        case 'PUT':
          this.router.put(route, (req: Request, res: Response) => {
            this.processRequest(name, isProtected, req, res);
          });
          break;
        case 'DELETE':
          this.router.delete(route, (req: Request, res: Response) => {
            this.processRequest(name, isProtected, req, res);
          });
          break;
        default: throw new Error(`Invalid method specified: ${method}`);
      }
    })
  }

  /**
   * Returns the params regarding every existent route
   * @returns IkojiRoutesParams[]
   * @private
   * @memberof ServerRoutes
   */
  private getRoutes(): IkojiRoutesParams[] {
    // get all routes
    const routes = fs.readdirSync('./routes/')
      .filter((name: string) => fs.existsSync(`./routes/${name}`) && fs.lstatSync(`./routes/${name}`).isDirectory())
      .map((name: string) => {
        try {
          // get the koji route setup
          const body = fs.readFileSync(`./routes/${name}/koji.json`, 'utf8');
          const data = JSON.parse(body);
          return data.routes[0] as IkojiRoutesParams;
        } catch (err) {
          return;
        }
      })
      .filter(route => route);

    return routes || [];
  }

  /**
   * Initializes the controller regarding the route
   * @returns void
   * @private
   * @memberof ServerRoutes
   */
  private processRequest(routeName: string, isProtected: boolean, req: Request, res:Response): void {
    // init koji console
    this.kojiConsole(req);

    try {
      // get controller
      const { defaultController } = require(`../routes/${routeName}/index.ts`);
      // initialize it
      defaultController.init(req, res);
    } catch (err) {
      console.log('[koji-error]', err);
    }
  }

  /**
   * Initializes the koji console
   * @returns void
   * @private
   * @memberof ServerRoutes
   */
  private kojiConsole(req: Request): void {
    // dynamically execute route handler (and capture console from koji if request is tagged)
    const __originalConsole = console.log.bind(console);

    // console overload for debugging
    const requestTag = req.headers['x-jiro-request-tag'];
    console.log('processRequest requestTag: ', requestTag);
    if (!requestTag) {
      console.log = __originalConsole;
    } else {
      console.log = (...args) => {
        args.unshift(`[koji-log] ${requestTag}`);
        __originalConsole.apply(this, args);
      }
    }
  }
}

export const serverRoutes = new ServerRoutes().router;
