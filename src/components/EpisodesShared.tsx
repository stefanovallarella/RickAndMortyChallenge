import React, { useEffect, useState } from "react";

import { Episode } from "../@types/Api";

import * as Styled from "../styles/pages/home";

interface EpisodesSharedProps {
  episodesOne: Episode[] | null;
  episodesTwo: Episode[] | null;
  nameCharOne: string | null;
  nameCharTwo: string | null;
}

export function EpisodesShared({
  episodesOne,
  episodesTwo,
  nameCharOne,
  nameCharTwo,
}: EpisodesSharedProps) {
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const commonEpisodes = (episodesOne ?? []).filter((episode1) =>
      (episodesTwo ?? []).some((episode2) => episode2.id === episode1.id)
    );

    setSharedEpisodes(commonEpisodes);
  }, [episodesOne, episodesTwo]);

  return (
    <>
      <Styled.EpisodeContainer image={"rickandmorty-bg-shared.jpg"}>
        <Styled.SectionTitle>
          <p>Character #1 & #2 Shared Episodes</p>
          {nameCharOne && nameCharTwo && (
            <p>
              {nameCharOne} & {nameCharTwo}
            </p>
          )}
        </Styled.SectionTitle>
        <Styled.ScrollableContainer>
          {sharedEpisodes.length === 0 ? (
            nameCharOne && nameCharTwo ? (
              <p>No shared episodes</p>
            ) : (
              <p>Select Character #1 and #2 first</p>
            )
          ) : (
            sharedEpisodes.map((episode) => (
              <p key={episode.id}>
                <strong>Name</strong> {episode.name} <strong>Air Date:</strong>{" "}
                {episode.air_date}
              </p>
            ))
          )}
        </Styled.ScrollableContainer>
      </Styled.EpisodeContainer>
    </>
  );
}
