/*
  This component is used to wrap all pages, similar to _app.js in Next.js but cross-platform.
*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
// import { Header } from 'react-native-elements'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

import { config } from '../../config/config'

import PageHead from './PageHead'

const Page = ({ title = config.appName, description, children }) => {
  return (
    <>
      <PageHead
        title={title}
        description={description}
      />
      {/*
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: title, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
       */}
      <View style={styles.container}>
        {children}
      </View>
    </>
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
