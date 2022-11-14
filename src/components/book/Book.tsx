import { FC } from 'react'
import { BookType } from '../../types'
import Character from '../character/Character'

interface BookProps {
  book: BookType
}

const Book: FC<BookProps> = ({ book }) => {
  return (
    <div style={{ border: 'solid red', minHeight: 300 }}>
      <h2>{book.name}</h2>
      {book.characters.map((characterUrl) => {
        return <Character key={characterUrl} characterUrl={characterUrl} />
      })}
    </div>
  )
}

export default Book
