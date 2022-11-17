import { FC, useCallback, useState } from 'react'

import type { BookType, CharacterType } from '../../types'
import { formatDate } from '../../utils'
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
    <div className="w-full sm:w-[350px] h-[400px] shadow-md rounded-md">
      <div className="w-full h-[200px] bg-[#D9D9D9]"></div>
      <div className="p-4">
        <h3 className="font-cinzel lg:text-lg font-bold mb-2 text-[#373737]">
          {book.name}
        </h3>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat text-sm">
            <span className="font-montserrat font-medium text-[#494949]">
              Publisher:
            </span>{' '}
            <span className="text-[#525151]">{book.publisher}</span>
          </p>
          <p className="font-montserrat text-sm">
            <span className="font-montserrat font-medium text-[#494949]">
              {'Author(s)'}:
            </span>{' '}
            <span className="text-[#525151]">{book.authors.join(',')}</span>
          </p>
          <p className="font-montserrat text-sm">
            <span className="font-montserrat font-medium text-[#494949]">
              ISBN:
            </span>{' '}
            <span className="text-[#525151]">{book.isbn}</span>
          </p>
          <p className="font-montserrat text-sm">
            <span className="font-montserrat font-medium text-[#494949]">
              End Date:
            </span>{' '}
            <span className="text-[#525151]">{formatDate(book.released)}</span>
          </p>
        </div>
      </div>
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
