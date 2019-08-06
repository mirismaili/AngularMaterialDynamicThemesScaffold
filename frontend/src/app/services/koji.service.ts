// core
import {Injectable} from '@angular/core';
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
  getEditor(property?: string): IKojiConfigEditor | undefined {
    if (!property) return this.kojiConfig['@@editor'];
    
    if (this.kojiConfig.hasOwnProperty(property)) return this.kojiConfig[property]
    
    console.error(`The property "${property}" doesn't exist in @@editor`)
  }
}
