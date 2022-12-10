import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ApolloClientProvider } from '../providers/ApolloClientProvider'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}


type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <ApolloClientProvider>
     {getLayout(<Component {...pageProps} />)}
    </ApolloClientProvider>
  )
}
