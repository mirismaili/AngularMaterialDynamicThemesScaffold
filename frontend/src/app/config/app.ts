// tslint:disable:max-line-length
import { environment } from '../../environments/environment';

const app_base_url = environment.app_base_url;

// app configuration (angular automatically selects the proper environment dev/prod)
export const APP = {
  name: 'Frontend',
  base_url: app_base_url,
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
  defaults: {
    metatags: {
      title: 'New App',
      description: 'A new App',
      image: `${app_base_url}/assets/images/angular8-typescript-scaffold-logo.png`,
      url: app_base_url
    }
  },
  errors: {
    msg_generic: 'Something went wrong... :S',
    msg_invalid_value: 'The values are invalid'
  }
};
