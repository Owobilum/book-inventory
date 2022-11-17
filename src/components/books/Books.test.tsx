import { renderWithQueryClient } from '../../test-utils'

import Books from './Books'

test('Renders Books Component', async () => {
  renderWithQueryClient(<Books />)
})
