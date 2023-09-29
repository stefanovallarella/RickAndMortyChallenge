
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Episode, Character } from '../@types/Api'; 
import { useCharacterContext } from '@/contexts/CharacterContext' 

import * as Styled from '../styles/pages/home';

interface EpisodesCharacterProps { 
  character: Character | null;
  characterOrder: number
}

export function EpisodesCharacter({ character, characterOrder}: EpisodesCharacterProps) {

  const { setEpisodes1, setEpisodes2 } = useCharacterContext();
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        if (character?.episode && character.episode.length > 0) {
          const episodeIds = character.episode.map((url) => {
            const parts = url.split('/');
            return parseInt(parts[parts.length - 1]);
          });
    
          const apiUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(
            ','
          )}`;
    
          const response = await axios.get(apiUrl);
    
          const episodesData = Array.isArray(response.data) ? response.data : [response.data];
    
          if(characterOrder === 1){
            setEpisodes1(episodesData);
          }else{
            setEpisodes2(episodesData);
          }
          setEpisodes(episodesData);
        }
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [character]);


  return (
    <>
      <Styled.EpisodeContainer image={character? character.image : ''}>
      <Styled.SectionTitle>
        {character ? (
          <>
            <p>Character #{characterOrder}</p>
            <p>{character.name} <span>Episodes</span></p>
          </>
        ) : (
          <p>Please select character #{characterOrder} first</p>
        )}
      </Styled.SectionTitle>
      <Styled.ScrollableContainer>
        {episodes.map((episode) => (
          <p key={episode.id}>
            <strong>Name: </strong>
            {episode.name} <strong>Air Date:</strong> {episode.air_date}
          </p>
        ))}
      </Styled.ScrollableContainer>
      </Styled.EpisodeContainer>
    </>
  );
};
