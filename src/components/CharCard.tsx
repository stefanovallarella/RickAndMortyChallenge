import React from 'react'

import { Character } from '../@types/Api'

import * as CharContent from '../styles/components/CharCard'

interface CharCardProps {
  character: Character;
  onItemClick: (character: Character) => void;
  isSelected: boolean; 
}

export const CharCard: React.FC<CharCardProps> = ({ character, onItemClick, isSelected }) => {
  
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
    <CharContent.CharContent  onClick={handleClick} isSelected={isSelected}>
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
