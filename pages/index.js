import React from 'react'
// @generated: @expo/next-adapter@2.1.5
import { StyleSheet, Text, View } from 'react-native'

import PageHead from '../components/page/PageHead'
import { H1 } from '../components/webElements'

import { config } from '../config/config'

export default function App () {
  return (
    <View style={styles.container}>
      <PageHead />
      <H1 style={styles.h1}>Heading H1</H1>
      <Text style={styles.text}>This is {config.appName} running</Text>
      <Text style={styles.text}>{config.appTagline}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
