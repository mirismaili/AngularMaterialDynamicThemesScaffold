// tslint:disable:max-line-length
import { environment } from '../../environments/environment';


// app configuration (angular automatically selects the proper environment dev/prod)
export const APP = {
  name: 'Frontend',
  base_url: environment.app_base_url,
  paths: {
    home: 'home',
    sample: 'sample',
    notfound: 'notfound',
    privacy: 'privacy-policy'
  },
  cookies: {
    cookie: {
      domain: environment.app_cookie_domain
    },
  },
  metatags: {
    home: {
      title: 'Angular 8 + TypeScript Scaffold',
      description: 'A starting point to build a project using Angular 8 in the frontend and TypeScript in the backend',
      image() { return `${this.base_url}/assets/images/angular8-typescript-scaffold-logo.png`; },
      image_s() { return `${this.base_url}/assets/images/angular-logo.png`; },
      url() { return this.base_url; }
    },
    sample: {
      title: 'Angular 8 + TypeScript Scaffold',
      description: 'A starting point to build a project using Angular 8 in the frontend and TypeScript in the backend',
      image() { return `${this.base_url}/assets/images/angular8-typescript-scaffold-logo.png`; },
      image_s() { return `${this.base_url}/assets/images/angular-logo.png`; },
      url(url: string) { return this.base_url + url; }
    }
  },
  defaults: {},
  errors: {
    msg_generic: 'Something went wrong... :S',
    msg_invalid_value: 'The values are invalid'
  }
};
