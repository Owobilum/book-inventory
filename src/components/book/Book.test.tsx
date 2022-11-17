import { screen } from '@testing-library/react'
import { mockBook } from '../../mocks/mockData'
import { renderWithQueryClient } from '../../test-utils'

import Book from './Book'

test('Renders book info correctly', async () => {
  renderWithQueryClient(
    <Book book={mockBook} filter={{ filter: '', searchParam: '' }} />
  )

  const title = screen.getByRole('heading', {
    name: /A Game of Thrones/i,
  })
  expect(title).toBeInTheDocument()

  const publisher = screen.getByText(/Bantam Books/i)
  expect(publisher).toBeInTheDocument()

  const author = screen.getByText(/George R. R. Martin/i)
  expect(author).toBeInTheDocument()

  const isbn = screen.getByText(/978-0553103540/i)
  expect(isbn).toBeInTheDocument()

  const endDate = screen.getByText('8/1/1996, 12:00:00 AM')
  expect(endDate).toBeInTheDocument()
})
