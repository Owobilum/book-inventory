import { FC, useEffect } from 'react'

import { useCharacter } from '../../hooks/useCharacter'
import type { CharacterType } from '../../types'

interface CharacterProps {
  characterUrl: string
  handleSetCharacters: (character: CharacterType) => void
}

const Character: FC<CharacterProps> = ({
  characterUrl,
  handleSetCharacters,
}) => {
  const { character } = useCharacter(characterUrl)

  useEffect(() => {
    character && handleSetCharacters(character)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character])

  return <></>
}

export default Character
