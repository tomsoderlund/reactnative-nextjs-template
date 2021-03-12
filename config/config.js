const packageJson = require('../package.json')
// const manifest = require('public/manifest.json')

const serverPort = process.env.PORT || 3005

const completeConfig = {

  default: {
    serverPort,
    appSlug: packageJson.name,
    appVersion: packageJson.version,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
    appName: packageJson.name,
    appTagline: packageJson.description,
    appDescription: packageJson.description,
    locale: 'en_US', // sv_SE
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}
