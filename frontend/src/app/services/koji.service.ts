// core
import { Injectable } from '@angular/core';
// packages
import Koji from 'koji-tools';
// interfaces
import {
  IKojiConfig, IKojiConfigEditor,
  IKojiConfigRoutes, IKojiConfigMetadata
} from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class KojiService {

  private kojiConfig: IKojiConfig;

  constructor() {
    this.kojiConfig = Koji.config;
  }

  /**
   * Gets all data from Koji config
   * @returns: IKojiConfig
   */
  getConfig(): IKojiConfig {
    return this.kojiConfig;
  }

  /**
   * Gets 'routes' data from Koji config
   * @returns: IKojiConfigRoutes[]
   */
  getRoutes(): IKojiConfigRoutes[] {
    return this.kojiConfig.routes;
  }

  /**
   * Gets '@@Editor' or a property of it from Koji config
   * @param property: String
   * @returns: IKojiConfigEditor
   */
  getEditor(property?: string): IKojiConfigEditor | any {
    if (!property) {
      return this.kojiConfig['@@editor'];
    } else {
      try {
        return this.kojiConfig[property];
      } catch (error) {
        console.log('This property doesn\'t exists in the Editor');
        return;
      }
    }
  }
}
