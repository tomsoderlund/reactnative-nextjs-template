/**
 * JustAWebPage – attempt at making a “regular” page page and still embed React Native components.
 */

import React from 'react'

import { config } from '../config/config'

import PageHead from '../components/page/PageHead'

export default function JustAWebPage ({ title = config.appName, description }) {
  return (
    <>
      <PageHead
        title={title}
        description={description}
      />
      <article>Web page</article>
      <style jsx>{`
        article {
          font-size: 30px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      `}
      </style>
    </>
  )
}
