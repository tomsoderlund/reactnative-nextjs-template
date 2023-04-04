import type { AppProps } from 'next/app'

import Page from '../components/page/Page'

function MyApp ({ Component, pageProps, router }: AppProps): React.ReactElement {
  // props (Server + Client): Component, err, pageProps, router
  return (
    <Page
      {...pageProps}
    >
      <Component
        {...pageProps}
        {...router}
      />
    </Page>
  )
}
export default MyApp
