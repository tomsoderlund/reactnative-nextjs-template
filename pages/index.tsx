import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useToast } from 'react-native-toast-notifications'

import { config } from '../config/config'
import makeRestRequest from '../lib/makeRestRequest'
import { H1 } from '../components/webElements'
// import VideoPlayer from '../components/VideoPlayer'

interface StartPageParams extends ParsedUrlQuery {
}

interface StartPageProps extends PageMetaProps {
  serverValue: number
}

export default function StartPage ({ serverValue }: StartPageProps): React.ReactElement {
  const toast = useToast()
  const [dataFromApi, setDataFromApi] = useState('')

  async function fetchDataFromApi (): Promise<void> {
    try {
      const data = await makeRestRequest('GET', 'test')
      setDataFromApi(data.message)
      toast.show?.('Received data from /api/test')
    } catch (err) {
      console.warn('Could not get data from /api/test', err)
      toast.show?.('Could not read from /api/test', { type: 'danger' })
    }
  }

  useEffect(() => {
    void fetchDataFromApi()
  }, [])

  return (
    <>
      <H1 style={styles.h1}>Heading H1</H1>
      <Text style={styles.text}>This is {config.appName} running</Text>
      <Text style={styles.text}>{config.appTagline}</Text>
      <Text style={styles.text}>serverValue (Next.js getStaticProps): {serverValue}</Text>
      <TouchableOpacity onPress={() => { void fetchDataFromApi() }}>
        <Text style={styles.text}>Data from /api/test: “{dataFromApi}”</Text>
      </TouchableOpacity>
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
