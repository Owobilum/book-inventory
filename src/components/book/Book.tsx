import { FC, useCallback, useState } from 'react'

import type { BookType, CharacterType } from '../../types'
import { handleBookSearch } from '../../utils/handleBookSearch'
import Character from '../character/Character'

interface BookProps {
  book: BookType
  filter: { filter: string; searchParam: string }
}

const Book: FC<BookProps> = ({ book, filter: { filter, searchParam } }) => {
  const [characters, setCharacters] = useState<CharacterType[]>([])

  const handleSetCharacters = useCallback(
    (character: CharacterType) => {
      if (!characters) {
        setCharacters([character])
      } else {
        setCharacters((prev) => [...prev, character])
      }
    },
    [characters]
  )

  if (!handleBookSearch(searchParam, filter, book, characters)) {
    return null
  }

  return (
    <div style={{ border: 'solid red', minHeight: 300 }}>
      <h2>{book.name}</h2>
      {book.characters.map((characterUrl) => {
        return (
          <Character
            key={characterUrl}
            characterUrl={characterUrl}
            handleSetCharacters={handleSetCharacters}
          />
        )
      })}
    </div>
  )
}

export default Book
