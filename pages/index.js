import React from 'react'
// @generated: @expo/next-adapter@2.1.5
import { StyleSheet, Text, View } from 'react-native'

import { H1 } from '../components/webElements'

export default function App () {
  return (
    <View style={styles.container}>
      <H1 style={styles.h1}>Heading H1</H1>
      <Text style={styles.text}>This is reactnative-nextjs-template running!</Text>
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
    fontSize: 16
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12
  }
})
