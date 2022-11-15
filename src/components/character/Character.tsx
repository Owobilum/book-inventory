import { FC, useEffect, useState } from 'react'

import { useCharacter } from '../../hooks/useCharacter'
import type { CharacterType } from '../../types'

interface CharacterProps {
  characterUrl: string
}

const Character: FC<CharacterProps> = ({ characterUrl }) => {
  const { character } = useCharacter(characterUrl)
  const [characterDetails, setCharacterDetails] = useState<CharacterType>()

  useEffect(() => {
    character && setCharacterDetails(character)
  }, [character])

  return (
    <div>
      <h3>{characterDetails?.name}</h3>
    </div>
  )
}

export default Character
