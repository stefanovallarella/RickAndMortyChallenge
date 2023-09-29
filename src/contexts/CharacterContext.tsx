import React, { createContext, useContext, useState, ReactNode } from 'react';

import { Character, Episode } from '../@types/Api'

interface CharacterContextType {
  character1: Character | null;
  setCharacter1: (character: Character | null) => void;
  character2: Character | null;
  setCharacter2: (character: Character | null) => void;
  episodes1: Episode[] | null;
  setEpisodes1: (episodes: Episode[] | null) => void;
  episodes2: Episode[] | null;
  setEpisodes2: (episodes: Episode[] | null) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

interface CharacterProviderProps {
  children: ReactNode;
}

export function CharacterProvider({ children }: CharacterProviderProps) {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);
  const [episodes1, setEpisodes1] = useState<Episode[] | null>(null);
  const [episodes2, setEpisodes2] = useState<Episode[] | null>(null);

  return (
    <CharacterContext.Provider value={{ character1, setCharacter1, character2, setCharacter2, episodes1, setEpisodes1, episodes2, setEpisodes2 }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext(): CharacterContextType {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacterContext context error');
  }
  return context;
}
