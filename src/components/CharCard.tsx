import React from 'react'

import { Character } from '../@types/Api'

import * as CharContent from '../styles/components/CharCard'

interface CharCardProps {
  character: Character;
  onItemClick: (character: Character) => void; 
}

export const CharCard: React.FC<CharCardProps> = ({ character, onItemClick }) => {
  
  const handleClick = () => {
    onItemClick(character);
  };
  
  const getStatusIcon = () => {
    switch (character.status) {
      case 'Alive':
        return '💜';
      case 'Dead':
        return '💀';
      default:
        return '❓';
    }
  };

  return (
    <CharContent.CharContent onClick={handleClick}>
      <CharContent.CharImage
        src={character.image}
        width={185}
        height={185}
        alt={character.name}
      />
      <CharContent.CharDetails status={character.status}>
        <p>{character.species}</p>
        <p>Status: <span>{character.status}</span> {getStatusIcon()}</p>
      </CharContent.CharDetails>
    </CharContent.CharContent>
  )
}
