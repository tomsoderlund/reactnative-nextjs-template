import { View } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications'

import { GLOBAL_STYLES } from './config/globalStyles'
// import { AnalyticsContextProvider } from './hooks/useAnalytics'
// import Page from './components/page/Page'
import IndexPage from './pages/index'

export default function App (): React.ReactElement {
  return (
    <ToastProvider
      placement='top'
      animationType='slide-in'
      normalColor='black'
    >
      <View style={GLOBAL_STYLES.PAGE_CONTAINER}>
        <IndexPage
          serverValue={54321}
        />
      </View>
    </ToastProvider>
  )
}
