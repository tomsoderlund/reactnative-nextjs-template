import { View } from 'react-native'

import { GLOBAL_STYLES } from './config/globalStyles'
// import Page from './components/page/Page'
import IndexPage from './pages/index'

export default function App (): React.ReactElement {
  return (
    <View style={GLOBAL_STYLES.PAGE_CONTAINER}>
      <IndexPage
        serverValue={54321}
      />
    </View>
  )
}
