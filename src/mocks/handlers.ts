import { rest } from 'msw'

import { mockBooks, mockCharacter } from './mockData'

export const handlers = [
  rest.get('https://www.anapioficeandfire.com/api/books', (req, res, ctx) => {
    return res(ctx.json(mockBooks))
  }),
  rest.get(
    'https://anapioficeandfire.com/api/characters/:id',
    (req, res, ctx) => {
      return res(ctx.json(mockCharacter))
    }
  ),
]
