const webpack = require('webpack');

module.exports = {
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
