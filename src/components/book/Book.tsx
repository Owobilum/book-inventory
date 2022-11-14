import { FC } from 'react'
import { BookType } from '../../types'

interface BookProps {
  book: BookType
}
const Book: FC<BookProps> = ({ book }) => {
  return (
    <div style={{ border: 'solid red', height: 300 }}>
      <h2>{book.name}</h2>
    </div>
  )
}

export default Book
