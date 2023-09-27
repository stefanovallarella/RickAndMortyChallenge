
import React, { useContext } from 'react'

// Types

import { useCharacterContext } from '@/contexts/CharacterContext'

// Styles
import * as S from '../styles/pages/home'


export function EpisodesContainer() {

  const { character1, character2 } = useCharacterContext();
  
  return (
   <>
    <S.EpisodeSection>
      <S.EpisodeContainer>
        <S.SectionTitle>Section 1</S.SectionTitle>
        <S.ScrollableContainer>
          <p>{character1?.name}</p>
        </S.ScrollableContainer>
      </S.EpisodeContainer>

      <S.EpisodeContainer>
        <S.SectionTitle>Section 2</S.SectionTitle>
        <S.ScrollableContainer>
          <p>PEPEPE22</p>
      
        </S.ScrollableContainer>
      </S.EpisodeContainer>

      <S.EpisodeContainer>
        <S.SectionTitle>Section 3</S.SectionTitle>
        <S.ScrollableContainer>
        <p>{character2?.name}</p>
        </S.ScrollableContainer>
      </S.EpisodeContainer>

    </S.EpisodeSection>
   </>
  )
}
