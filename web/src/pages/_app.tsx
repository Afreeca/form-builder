import type { AppProps } from 'next/app'
import { ApolloClientProvider } from '../providers/ApolloClientProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloClientProvider>
      <Component {...pageProps} />
    </ApolloClientProvider>
  )
}
