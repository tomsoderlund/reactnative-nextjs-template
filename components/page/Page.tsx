/*
  This component is used to wrap all pages, similar to _app.js in Next.js but cross-platform.
*/
import React from 'react'
import { View } from 'react-native'
// import { Header } from 'react-native-elements'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

import { config } from '../../config/config'
import { GLOBAL_STYLES } from '../../config/globalStyles'

import PageHead from './PageHead'

interface PageProps {
  title?: string
  description?: string
  children: React.ReactNode
}

const Page = ({ title = config.appName, description, children }: PageProps): React.ReactElement => {
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
      <View style={GLOBAL_STYLES.PAGE_CONTAINER}>
        {children}
      </View>
    </>
  )
}
export default Page
