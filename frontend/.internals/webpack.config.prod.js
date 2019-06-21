const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PROD: process.env.NODE_ENV === 'production',
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        JIRO_BACKEND_URL: JSON.stringify(process.env.JIRO_BACKEND_URL),
        JIRO_FRONTEND_URL: JSON.stringify(process.env.JIRO_FRONTEND_URL),
      },
    }),
  ],
  /**
  * Include polyfills or mocks for various node stuff
  * Description: Node configuration
  *
  * See: https://webpack.js.org/configuration/node/
  */
  node: {
    global: true,
    process: true,
  }
}