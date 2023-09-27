import React, { createContext, useContext, useState, ReactNode } from 'react';


// Types
import { Character } from '../@types/Api'

interface CharacterContextType {
  character1: Character | null;
  setCharacter1: (character: Character | null) => void;
  character2: Character | null;
  setCharacter2: (character: Character | null) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

interface CharacterProviderProps {
  children: ReactNode;
}

export function CharacterProvider({ children }: CharacterProviderProps) {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);

  return (
    <CharacterContext.Provider value={{ character1, setCharacter1, character2, setCharacter2 }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext(): CharacterContextType {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
}
