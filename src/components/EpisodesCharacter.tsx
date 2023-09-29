
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';


// Types
import { Episode, Character } from '../@types/Api'; 
import { useCharacterContext } from '@/contexts/CharacterContext' 


// Styles
import * as S from '../styles/pages/home';

interface EpisodesCharacterProps { 
  character: Character | null;
  characterOrder: number
}



export function EpisodesCharacter({ character, characterOrder}: EpisodesCharacterProps) {

  const { setEpisodes1, setEpisodes2 } = useCharacterContext();
  const [episodes, setEpisodes] = useState<Episode[]>([]); // Assuming you have the Episode interface defined

  useEffect(() => {
    // Function to fetch episodes for the given character
    const fetchEpisodes = async () => {
      try {
        if (character?.episode && character.episode.length > 0) {
          // Extract the episode IDs from character.episode URLs
          const episodeIds = character.episode.map((url) => {
            const parts = url.split('/');
            return parseInt(parts[parts.length - 1]);
          });
    
          // Construct the API URL with the array of episode IDs
          const apiUrl = `https://rickandmortyapi.com/api/episode/${episodeIds.join(
            ','
          )}`;
    
          // Fetch the episodes data
          const response = await axios.get(apiUrl);
    
          // Ensure that the response is always an array
          const episodesData = Array.isArray(response.data) ? response.data : [response.data];
    
          // Update the episodes state with the fetched data
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

    // Call the fetchEpisodes function whenever the character changes
    fetchEpisodes();
  }, [character]);


  return (
    <>
      <S.EpisodeContainer image={character? character.image : ''}>
        <S.SectionTitle>
          <p>Character #{characterOrder}</p>
          <p>{character?.name} <span>Episodes</span></p>
          </S.SectionTitle>
        <S.ScrollableContainer>
            {episodes.map((episode) => (
                <p key={episode.id}><strong>Name: </strong>{episode.name}   <strong>Air Date:</strong> {episode.air_date}</p>
            ))}
        </S.ScrollableContainer>
      </S.EpisodeContainer>
    </>
  );
};
