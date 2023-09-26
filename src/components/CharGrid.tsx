
// React
import React, { useContext  } from 'react'
import * as S from '../styles/pages/home'

// Types
import { ApiData, Character } from '../@types/Api'


import { CharCard } from './CharCard' 


interface CharCardProps {
  characters: Character[]
}



export function CharGrid({ characters }: CharCardProps) {

  return (
    <>
      <S.Pane>
          {characters.map((character) => (
            <CharCard key={character.id} character={character} />
          ))}
      </S.Pane>
    </>
  )
}
