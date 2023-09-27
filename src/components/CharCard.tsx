// Next
import Image from 'next/image'

// React
import React, { useContext } from 'react'

// Types
import { Character } from '../@types/Api'

// Styles
import * as CharContent from '../styles/components/CharCard'

interface CharCardProps {
  character: Character;
  onItemClick: (character: Character) => void; // Add onItemClick prop
}

export const CharCard: React.FC<CharCardProps> = ({ character, onItemClick }) => {
  
  const handleClick = () => {
    onItemClick(character);
  };

  return (
    <CharContent.CharContent onClick={handleClick}>
      <Image
        loader={() => character.image}
        src={character.image}
        unoptimized
        width={200}
        height={200}
        alt={character.name}
      />
      <span>{character.status}</span>
      <span>{character.species}</span>
      {/* <div>
        <S.AddFavoriteButton
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            handleAddOrRemoveFavorite(character)
          }}
        >
          {checkIfItemAlreadyExists(character.id) > -1 ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </S.AddFavoriteButton>
      </div> */}
    </CharContent.CharContent>
  )
}
