import { QueryClient, QueryKey } from 'react-query'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { MILLISECS_IN_DAY } from '../utils'
import { queryKeys } from './constants'

function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : 'error connecting to server'
  console.log(title)
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 600000,
        cacheTime: MILLISECS_IN_DAY,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  })
}

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
})

const doNotPersistQueries: QueryKey[] = [queryKeys.books]

export const queryClient = generateQueryClient()

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
  maxAge: MILLISECS_IN_DAY,
  hydrateOptions: {},
  dehydrateOptions: {
    shouldDehydrateQuery: ({ queryKey }) => {
      return !doNotPersistQueries.includes(queryKey)
    },
  },
})
