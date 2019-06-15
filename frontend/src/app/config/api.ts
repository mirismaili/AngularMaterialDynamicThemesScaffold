// tslint:disable:object-literal-key-quotes
// core
import { HttpHeaders } from '@angular/common/http';
// environment
import { environment } from '../../environments/environment';
// config
import { APP } from './app';

// API config
// -- api base url
const APIEndpoints = {
  base_url: environment.app_api_service_url,
  sample() {
    return `${this.base_url}/api/sample`;
  },
};

// -- api headers
const APIHeaders = {
  get() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': APP.base_url,
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,HEAD',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept,',
      'Content-Type': 'application/json; charset=utf-8'
    });
  },
  post() {
    return new HttpHeaders({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Access-Control-Allow-Origin': APP.base_url,
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,HEAD',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  },
};


// -- api config
export const API = {
  headers: APIHeaders,
  endpoints: APIEndpoints,
};
