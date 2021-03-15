import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import PageHead from './PageHead'

const Page = ({ title, description, children }) => {
  return (
    <SafeAreaProvider>
      <PageHead
        title={title}
        description={description}
      />
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaProvider>
  )
}
export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
