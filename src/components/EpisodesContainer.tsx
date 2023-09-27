
import React, { useContext } from 'react'

// Types

import { useCharacterContext } from '@/contexts/CharacterContext'

// Styles
import * as S from '../styles/pages/home'
import { EpisodesCharacter } from './EpisodesCharacter';
import { EpisodesShared } from './EpisodesShared';


export function EpisodesContainer() {

  const { character1, character2, episodes1, episodes2 } = useCharacterContext();
  
  return (
   <>
    <S.EpisodeSection>
      <EpisodesCharacter character={character1} characterOrder={1}  />
      <EpisodesShared episodesOne={episodes1} episodesTwo={episodes2}/>
      <EpisodesCharacter character={character2} characterOrder={2}  />
    </S.EpisodeSection>
   </>
  )
}
