import { ApolloProvider } from '@apollo/client'
import { ClientApollo } from './ApolloClient'

export const ApolloClientProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  
  return <ApolloProvider client={ClientApollo}>{children}</ApolloProvider>
}
