![Banner image](https://cdn1.imggmi.com/uploads/2019/6/15/31fa5a47f8863614af591c03dc768ba4-full.png)


# Angular 8 + TypeScript Scaffold

### A starting point to build a project using Angular 8 in the frontend and TypeScript in the backend

Changelog

v1.0 - Initial release


## Features:
- Frontend:
  - Angular 8 with the new engine [IVY](https://blog.angularindepth.com/all-you-need-to-know-about-ivy-the-new-angular-engine-9cde471f42cf) enabled
  - CLI commands available in terminal
  - Lazy Load modules
  - Angular animations included
  - Hot reloading
  - Builders API ready for customs builds using Webpack
  - Highly customizable & Koji integration
  - SEO ready
  - Some examples included (pages, services, directives, routing...)
- Backend:
  - Built in TypeScript
  - A simple API routing implemented
  - CORS enabled by default
  - Hot reloading


## Todo:
- Add security rules to the frontend & backend (next release)
- Auto generate new api endpoints on frontend when a new one is added in backend (next release)
- PWA compatibility (actually works but needs some tweaks in the pwa.js file - next release)
- Google Analytics implementation (next release)
- Add Angular flex-layout (Flexbox CSS + mediaQuery as a service)
- Add reset CSS rules


## Getting Started
- App general config [here](#~/frontend/src/app/config/app.ts)
- App entry point template [here](#~/frontend/src/index.html)
- App routes [here](#~/frontend/src/app/app-routing.module.ts)
- Server entry point [here](#~/backend/index.ts)
- Server routes [here](#~/backend/routes/server.routes.ts)

## How to...

### Add a route in the backend and use it at the frontend
- In the Koji Editor, inside the 'backend' folder, add a folder with two files
```
myfolder 
  > index.ts (the controller for this route)
  > koji.json (the koji file to add the route)
```
- Then, in the 'frontend' folder, just add a new endpoint to the ['/config/api.ts'](#~/frontend/src/app/config/api.ts)
```javascript
const APIEndpoints = {
  base_url: environment.app_api_service_url,
  sample() {
    return `${this.base_url}/api/sample`;
  },
  myNewEndpoint() {
    return `${this.base_url}/api/newendpoint`;
  }
};
```
- An use it in a service where you needed, an example ['/services/sample.service.ts'](#~/frontend/src/app/services/sample.service.ts)
```javascript
  getData(): Observable<any> {
    return this.http.get(API.endpoints.myNewEndpoint(), { headers: API.headers.get() }).pipe(
      map((data: any) => data),
      catchError(error => throwError(error || APP.errors.msg_generic))
    );
  }
```

### Add new fields inside 'Theme Settings' customization file
- In the Koji Editor, inside the 'Customization' section, select the 'Theme Settings' file. Then select the 'code' view.
- Because of every property that starts with the '--' characters are related to the css of the frontend, you can simply add a new property and then link it to the css file where is needed 
```json
  {
    "theme": {
      "--my-text-color": "#0F0F0F",
      ...
      ...
    },
    "@@editor": [
      {
      ...
      ...
      "fields": [
        {
          "key": "--my-text-color",
          "name": "Text Color",
          "description": "My favorite color",
          "type": "color"
        },
```
- And then, in order to use it, put this variable name to any scss file in the 'frontend'
```css
  .myClass {
    color: var(--my-text-color, #fff);
    ...
    ...
  }
```

### Add a new Custumization
- In the Koji Editor, inside the '.Koji' folder > customization, add a json file with the properties regarding the customization you want to add
- Then, the properties will be available in the frontend automatically. To use them, use a service
```javascript
    // gets the new customization properties by their key name
    const props = this.kojiService.getEditor('mynewcustomization');
```
- There are another useful methods added to the service
```javascript
    // gets all data from Koji config
    const props = this.kojiService.getConfig();
    // gets 'routes' data from Koji config
    const props = this.kojiService.getRoutes();
    // omitting a key name you'll get the '@@Editor' content
    const props = this.kojiService.getEditor();
```

## Support and suggestions
Please feel free to [contact me](https://gokoji.com/profile/gtrdev) if you have any suggestions!   
