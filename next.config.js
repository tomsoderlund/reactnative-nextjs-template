const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  typescript: {
    // TODO: Warning: This allows production builds to successfully complete even if your project has TypeScript errors
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native / Expo packages here...
    'react-native-elements',
    'react-native-safe-area-context',
    'react-native-vector-icons'
  ],
  experimental: {
    forceSwcTransforms: true
  }
  // For font support:
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.module.rules.push({
  //     test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
  //     loader: 'file-loader?name=assets/[name].[hash].[ext]'
  //   })
  //   return config
  // }
}

module.exports = withExpo(nextConfig)
