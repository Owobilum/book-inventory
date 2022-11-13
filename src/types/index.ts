export type BookType = {
  url: string
  name: string
  isbn: string
  authors: string[]
  numberOfPages: number
  publisher: string
  country: string
  mediaType: string
  released: string
  characters: string[]
  povCharacters: string[]
}

export type CharacterType = {
  url: string
  name: string
  gender: string
  culture: string
  born: string
  died: string
  titles: string[]
  aliases: string[]
  father: string
  mother: string
  spouse: string
  allegiances: string[]
  books: string[]
  povBooks: string[]
  tvSeries: string[]
  playedBy: string[]
}
