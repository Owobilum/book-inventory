import { rest } from 'msw'

import { mockBooks, mockCharacter } from './mockData'

export const handlers = [
  rest.get('http://localhost:3030/books', (req, res, ctx) => {
    return res(ctx.json(mockBooks))
  }),
  rest.get('http://localhost:3030/character/:id', (req, res, ctx) => {
    return res(ctx.json(mockCharacter))
  }),
]
