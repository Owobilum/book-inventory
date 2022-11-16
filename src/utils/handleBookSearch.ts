import { BookType, CharacterType } from '../types'

const hasCharacter = (characters: CharacterType[], searchParam: string) =>
  characters.some((character) =>
    character.name
      .toLocaleLowerCase()
      .includes(searchParam.toLowerCase().trim())
  )

const hasCulture = (characters: CharacterType[], searchParam: string) =>
  characters.some((character) =>
    character.culture
      .toLocaleLowerCase()
      .includes(searchParam.toLowerCase().trim())
  )

export const handleBookSearch = (
  searchParam: string,
  filter: string,
  book: BookType,
  characters: CharacterType[]
): boolean => {
  if (!searchParam) return true

  switch (filter) {
    case 'publisher':
      if (
        book.publisher.toLowerCase().includes(searchParam.toLowerCase().trim())
      )
        return true
      else return false
    case 'name':
      if (book.name.toLowerCase().includes(searchParam.toLowerCase().trim()))
        return true
      else return false
    case 'isbn':
      if (book.isbn.toLowerCase().includes(searchParam.toLowerCase().trim()))
        return true
      else return false
    case 'authors':
      if (
        book.authors.some((author) =>
          author.toLowerCase().includes(searchParam.toLowerCase().trim())
        )
      )
        return true
      else return false
    case 'character_name':
      return hasCharacter(characters, searchParam)
    case 'character_culture':
      return hasCulture(characters, searchParam)
    case 'end_date':
      if (
        book.released.toLowerCase().includes(searchParam.toLowerCase().trim())
      )
        return true
      else return false
    default:
      return true
  }
}
