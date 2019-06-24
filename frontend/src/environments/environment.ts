// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// FRONTEND_URL and BACKEND_URL are declared in 'types' folder / these vars are set in the webpack file in '.internals' folder
export const environment = {
  production: false,
  koji_environment: true,
  app_base_url: FRONTEND_URL,
  app_api_service_url: BACKEND_URL,
  app_google_analytics_id: '',
  app_cookie_domain: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
