import React, { useContext } from "react";

import { useCharacterContext } from "@/contexts/CharacterContext";

import * as S from "../styles/pages/home";
import { EpisodesCharacter } from "./EpisodesCharacter";
import { EpisodesShared } from "./EpisodesShared";

export function EpisodesContainer() {
  const { character1, character2, episodes1, episodes2 } =
    useCharacterContext();

  return (
    <>
      <S.EpisodeSection>
        <EpisodesCharacter character={character1} characterOrder={1} />
        <EpisodesShared
          episodesOne={episodes1}
          episodesTwo={episodes2}
          nameCharOne={character1 ? character1.name : null}
          nameCharTwo={character2 ? character2.name : null}
        />
        <EpisodesCharacter character={character2} characterOrder={2} />
      </S.EpisodeSection>
    </>
  );
}
