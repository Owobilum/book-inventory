import { FC } from 'react'
import { useBooks } from '../../hooks/useBooks'

const Books: FC = () => {
  const { books } = useBooks(1)
  console.log(books)
  return <div>Books</div>
}

export default Books
