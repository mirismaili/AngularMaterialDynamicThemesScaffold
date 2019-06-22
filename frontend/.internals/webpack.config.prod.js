const webpack = require('webpack');

// change these values for your domains
const PRODUCTION_BACKEND_URL = 'http://localhost:3000';
const PRODUCTION_FRONTEND_URL = 'http://localhost:4200';

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_URL: JSON.stringify(PRODUCTION_BACKEND_URL),
      FRONTEND_URL: JSON.stringify(PRODUCTION_FRONTEND_URL),
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
