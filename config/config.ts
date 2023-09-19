import packageJson from '../package.json'
import manifestJson from '../public/manifest.json'
import appJsonRoot from '../app.json'
const { expo: appJson } = appJsonRoot

// Change this to use API running on localhost:
const DEFAULT_ENVIRONMENT = __DEV__ ? 'development' : 'default'
const SERVER_URL = 'https://reactnativenextjstemplate.vercel.app/'
const serverPort = parseInt(process.env.PORT ?? '3005')

interface EnvironmentConfiguration {
  appSlug: string
  appVersion: string
  appUrl: string
  appName: string
  appTagline?: string
  appDescription?: string
  serverPort: number
  locale?: string
  fonts?: string[][]

  apiBaseUrl?: string

  debug?: Record<string, boolean>
}

interface AllConfigurations {
  default?: EnvironmentConfiguration
  development?: Partial<EnvironmentConfiguration>
  production?: Partial<EnvironmentConfiguration>
  test?: Partial<EnvironmentConfiguration>
}

export const completeConfig: AllConfigurations = {

  default: {
    appSlug: packageJson.name,
    appVersion: appJson.version,
    appUrl: SERVER_URL,
    appName: appJson.name,
    appTagline: manifestJson.description,
    appDescription: manifestJson.description,
    serverPort,
    locale: 'en_US', // sv_SE
    fonts: [
      ['Inter', 'wght@300;400;500;700']
    ],

    apiBaseUrl: `${SERVER_URL}api/`,

    debug: {
      fakeLocation: false,
      fakeAPI: false
    }
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    // apiBaseUrl: 'http://192.168.50.168:3005/api/' // Can’t use 'localhost' here because it’s an app
  },

  production: {
  }

}

// Public API
export const config = { ...completeConfig.default, ...completeConfig[DEFAULT_ENVIRONMENT] }
export default config
