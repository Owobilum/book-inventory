import { useQuery } from 'react-query'

import type { CharacterType } from '../types'

async function getCharacter(url: string): Promise<CharacterType> {
  const response = await fetch(url)
  const body = await response.json()
  return body
}

interface UseCharacter {
  character: CharacterType | undefined
}

export function useCharacter(url: string): UseCharacter {
  const { data } = useQuery(url, () => getCharacter(url), {
    staleTime: 3600000,
    cacheTime: 4200000,
  })

  return { character: data }
}
