
// React
import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import * as S from '../styles/pages/home'

// Types
import { ApiData, Character } from '../@types/Api'


import { CharCard } from './CharCard' 


interface CharCardProps {
  characters: Character[]
}

interface Props {
  res: ApiData
}

interface CurrentInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
  current: string
}

// interface Inputs {
//   query: string
// }


export const API_URL = 'https://rickandmortyapi.com/api/character'

import { useCharacterContext } from '@/contexts/CharacterContext' // Import the context hook



export function CharGrid({characterOrder}: {characterOrder: number}) {

  const { setCharacter1, setCharacter2 } = useCharacterContext();

  // Handle a click event and set character data
  const handleItemClick = (characterData: Character) => {
    // You can set the character data for Character1 and Character2 here
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
    //if (current === API_URL) return

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
    <>
      <S.Pane>
          {characters.map((character) => (
            <CharCard key={character.id} character={character} onItemClick={handleItemClick} />
          ))}

        <S.PaginationContainer>
          <S.BackButton onClick={handlePrevPage} disabled={disablePrevButton}>
            Prev
          </S.BackButton>
          <S.PageCount
            type="text"
            disabled
            value={`${currentPageNumber} / ${currentInfo.pages}`}
          />
          <S.NextButton onClick={handleNextPage} disabled={disableNextButton}>
            Next
          </S.NextButton>
        </S.PaginationContainer>
      </S.Pane>
    </>
  )
}
