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
    console.log('Koji Service config: ', Koji.config);
  }

  /**
   * Gets 'routes' data from Koji config
   * @returns: IKojiConfigRoutes[]
   */
  getRoutes(): IKojiConfigRoutes[] {
    return this.kojiConfig.routes;
  }

  /**
   * Gets '@@Editor' data from Koji config
   * @returns: IKojiConfigEditor
   */
  getEditor(): IKojiConfigEditor {
    return this.kojiConfig['@@editor'];
  }

  /**
   * Gets 'metadata' data from Koji config
   * @returns: IKojiConfigMetadata
   */
  getMetadata(): IKojiConfigMetadata {
    return this.kojiConfig.metadata;
  }
}
