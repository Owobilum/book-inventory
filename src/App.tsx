import { ReactElement } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from './react-query/queryClient'

import Container from './components/container/Container'
import Home from './pages/home/Home'

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Home />
      </Container>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
