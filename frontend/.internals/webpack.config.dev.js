const fs = require('fs')
const webpack = require('webpack')
const Koji = require('koji-tools')


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

const backendPort = Koji.config.develop.backend.port || '3000'
const frontendPort = Koji.config.develop.frontend.port || '4200'
const themes = resolveThemesFromScssFile(fs.readFileSync('./src/themes.scss', 'utf8'))

// set the proper environment parameters regarding the scope (Koji editor | desktop)
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_PORT: JSON.stringify(backendPort.toString()),
      FRONTEND_PORT: JSON.stringify(frontendPort.toString()),
      BACKEND_URL: JSON.stringify(process.env.JIRO_BACKEND_URL || `http://localhost:${backendPort}`),
      FRONTEND_URL: JSON.stringify(`http://0.0.0.0:${frontendPort}`),
      DEFINED_THEMES: JSON.stringify(themes),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  node: {
    global: true,
    process: true,
  }
}

function resolveThemesFromScssFile(themesScssFile) {
  const themesDefinition = themesScssFile.match(new RegExp('\\$themes-map\\s*:\\s*\\(([\\s\\S]*?)\\);'))[1]
  const regex = /[\s\S]*?([\w-]+)\s*:\s*\([\s\S]*?\)/g
  
  const themes = []
  
  while (true) {
    const m = regex.exec(themesDefinition)
    if (m === null) break
    themes.push(m[1])
  }
  
  return themes
}
