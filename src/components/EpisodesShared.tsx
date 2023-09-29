
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';


// Types
import { Episode, Character } from '../@types/Api'; 

// Styles
import * as S from '../styles/pages/home';

interface EpisodesSharedProps {
  episodesOne: Episode[] | null;
  episodesTwo: Episode[] | null;
  nameCharOne: string | null;
  nameCharTwo: string | null;
}



export function EpisodesShared({ episodesOne, episodesTwo, nameCharOne, nameCharTwo }: EpisodesSharedProps) {
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    // Compare arrays by id
    const commonEpisodes = (episodesOne ?? []).filter((episode1) =>
      (episodesTwo ?? []).some((episode2) => episode2.id === episode1.id)
    );
  
    // Set the shared episodes in the state
    setSharedEpisodes(commonEpisodes);
  }, [episodesOne, episodesTwo]);

  return (
    <>
      <S.EpisodeContainer image={'rickandmorty-bg-shared.jpg'}>
      <S.SectionTitle>
          <p>Character #1 & #2 Shared Episodes</p>
          <p>{nameCharOne} & {nameCharTwo}</p>
          </S.SectionTitle>
        <S.ScrollableContainer>
          <ul>
            {sharedEpisodes.map((episode) => (
              <p key={episode.id}><strong>Name</strong>  {episode.name}   <strong>Air Date:</strong> {episode.air_date}</p>

            ))}
          </ul>
        </S.ScrollableContainer>
      </S.EpisodeContainer>
    </>
  );
}