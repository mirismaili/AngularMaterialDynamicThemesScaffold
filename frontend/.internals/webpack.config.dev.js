const webpack = require('webpack');
const Koji = require('koji-tools');


// @TODO: old method to obtain the backend url
/*
// backend base url
 let backendUrl;
// get backend routes
const backend = Object.keys(Koji.config.backend);

if (backend && backend.length) {
  try {
    // set the backend base url
    backendUrl = new URL(Koji.config.backend[backend[0]]).origin;
  } catch(err) {
    // set it as empty string because of backend hostname is undefined
    backendUrl = '';
  }
}
*/

// set the proper environment parameters regarding the scope (Koji editor | desktop)
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_URL: JSON.stringify(process.env.JIRO_BACKEND_URL || `http://localhost:${Koji.config.develop.backend.port || '3000'}`),
      // FRONTEND_URL: JSON.stringify(process.env.JIRO_FRONTEND_URL || `http://localhost:${Koji.config.develop.backend.port || '3000'}`),
      FRONTEND_URL: JSON.stringify(`http://0.0.0.0:${Koji.config.develop.frontend.port || '4200'}`),
      BACKEND_PORT: JSON.stringify((Koji.config.develop.backend.port || '3000').toString()),
      FRONTEND_PORT: JSON.stringify((Koji.config.develop.frontend.port || '4200').toString()),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  node: {
    global: true,
    process: true,
  }
}
