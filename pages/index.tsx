import React from 'react'
import { StyleSheet, Text } from 'react-native'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { H1 } from '../components/webElements'
// import VideoPlayer from '../components/VideoPlayer'

import { config } from '../config/config'

interface StartPageParams extends ParsedUrlQuery {
}

interface StartPageProps {
  serverValue: number
}

export default function StartPage ({ serverValue }: StartPageProps): React.ReactElement {
  return (
    <>
      <H1 style={styles.h1}>Heading H1</H1>
      <Text style={styles.text}>This is {config.appName} running</Text>
      <Text style={styles.text}>{config.appTagline}</Text>
      <Text style={styles.text}>serverValue (Next.js getStaticProps): {serverValue}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12
  }
})

export async function getStaticProps ({ locale }: GetStaticPropsContext<StartPageParams>): Promise<GetStaticPropsResult<StartPageProps>> {
  return {
    props: {
      serverValue: 12345
    },
    revalidate: 10 * 60 // Refresh page every 10 minutes
  }
}
