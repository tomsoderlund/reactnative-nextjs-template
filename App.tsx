// Re-export the root component from the Next.js website as the root component for the native React app.
// export { default } from './pages/index'

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App (): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
