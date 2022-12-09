import {
    ApolloClient,
    from,
    HttpLink,
    InMemoryCache,
  } from '@apollo/client'
  import { onError } from '@apollo/client/link/error'
import getConfig from 'next/config'
  
const formBuilderApi = getConfig().publicRuntimeConfig.formBuilderApi
  
const errorLink = 
    onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => console.log(message))
    }
    if (networkError) {
        console.log("network error")
    }
    })

const link = from([ 
    errorLink, 
    new HttpLink({ uri: `${formBuilderApi}/graphql`})
])
  
export const ClientApollo = new ApolloClient({ link, cache: new InMemoryCache() });
  
  