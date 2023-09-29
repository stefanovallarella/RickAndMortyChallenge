import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as Styled from '../styles/pages/home'

import { ApiData, Character } from '../@types/Api'

import { CharCard } from './CharCard' 

interface CurrentInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
  current: string
}

export const API_URL = 'https://rickandmortyapi.com/api/character'

import { useCharacterContext } from '@/contexts/CharacterContext' 

export function CharGrid({characterOrder}: {characterOrder: number}) {

  const { setCharacter1, setCharacter2 } = useCharacterContext();

  const handleItemClick = (characterData: Character) => {
    if(characterOrder === 1){
      setCharacter1(characterData);
    }else{
      setCharacter2(characterData);
    }
  };

  const [apiData, setApiData] = useState<ApiData>({ info: { count: 0, pages: 0, next: null, prev: null }, results: [] });
  const { info, results } = apiData;
  const [characters, setCharacters] = useState<Character[]>(results)
  const [currentInfo, setCurrentInfo] = useState<CurrentInfo>({
    ...info,
    current: API_URL,
  })

  // Constants
  const { current } = currentInfo
  const disablePrevButton = currentInfo.prev === null
  const disableNextButton = currentInfo.next === null
  const currentPageNumber = current.includes('page=')
    ? Number(new URL(current).searchParams.get('page'))
    : 1

  // Functions
  const handleNextPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.next ? prevInfo.next : current }
    })
  }

  const handlePrevPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.prev ? prevInfo.prev : current }
    })
  }


  useEffect(() => {
    async function changePage() {
      const changePage = await axios
        .get<ApiData>(current)
        .then(({ data }) => {
          return data
        })
        .catch(() => {
          console.log('Personagem não encontrado!')
        })

      if (changePage) {
        setCurrentInfo({
          ...changePage.info,
          current,
        })

        setCharacters([...changePage.results])
      }
    }

    changePage()
  }, [current])


  return (
    <Styled.PaneContainer>
      <Styled.Pane>
          {characters.map((character) => (
            <CharCard key={character.id} character={character} onItemClick={handleItemClick} />
          ))}
      </Styled.Pane>
      <Styled.PaginationContainer>
        <Styled.BackButton onClick={handlePrevPage} disabled={disablePrevButton}>
          Prev
        </Styled.BackButton>
        <Styled.PageCount
          type="text"
          disabled
          value={`${currentPageNumber} / ${currentInfo.pages}`}
        />
        <Styled.NextButton onClick={handleNextPage} disabled={disableNextButton}>
          Next
        </Styled.NextButton>
      </Styled.PaginationContainer>
    </Styled.PaneContainer>
  )
}
