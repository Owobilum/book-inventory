import { useQuery } from 'react-query'

import { axiosInstance } from '../axiosInstance'
import type { CharacterType } from '../types'

async function getCharacter(url: string): Promise<CharacterType> {
  const { data } = await axiosInstance.get(url)
  return data
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
