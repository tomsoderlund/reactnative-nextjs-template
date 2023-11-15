import React from 'react'
import { Platform } from 'react-native'
import Head from 'next/head'

import manifest from '../../public/manifest.json'
import { config } from '../../config/config'
import useI18N from '../../hooks/useI18N'

const isDevelopment = (): boolean => true

const PageHead = ({ title, description, imageUrl, iconUrl = '/favicon.png', path = '/' }: PageMetaProps): React.ReactElement | null => {
  if (Platform.OS !== 'web') return null
  const { t } = useI18N()

  const pageTitle = (title !== undefined && title !== null)
    ? `${t(title)} – ${config.appName as string}`
    : `${config.appName as string} – ${t(config.appTagline as string)}`

  const pageDescription = description ?? config.appDescription ?? ''

  // SEO: title 60 characters, description 160 characters
  if (isDevelopment()) console.log(`PageHead (dev):\n• title (${60 - pageTitle.length}): “${pageTitle}”\n• description (${160 - pageDescription.length}): “${pageDescription}”`)

  const thumbnailUrl = imageUrl ?? `${config.appUrl as string}images/footsteps_to_city.jpg` // ?? `https://screens.myscreenshooterserver.com/?url=${config.appUrl}${path.slice(1)}${(path.includes('?') ? '&' : '?')}thumbnail=true`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />

      <meta charSet='utf-8' />
      <meta httpEquiv='content-language' content={config.locale?.split('_')[0]} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />

      <link rel='manifest' href='/manifest.json' />

      <link rel='shortcut icon' type='image/x-icon' href={iconUrl} />

      <meta property='og:site_name' content={config.appName} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:locale' content={config.locale} />

      {(thumbnailUrl !== undefined && thumbnailUrl !== null) && (
        <>
          <meta property='og:image' content={thumbnailUrl} />
          <meta name='twitter:image' content={thumbnailUrl} />
        </>
      )}

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />

      <meta name='theme-color' content={manifest.theme_color} />
      <link rel='apple-touch-icon' href={iconUrl} />
      {(manifest.display === 'standalone') ? <meta name='apple-mobile-web-app-capable' content='yes' /> : null}
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='apple-mobile-web-app-title' content={config.appName} />

      {/*
        <link rel='apple-touch-startup-image' href='' />

        <link rel='canonical' href={websiteUrl} />
        <meta property='og:url' content={websiteUrl} />

        <meta name='twitter:site' content={`@${config.landingPage.social.twitter}`} />
      */}

    </Head>
  )
}
export default PageHead
