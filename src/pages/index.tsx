import Head from "next/head";
import React from "react";

import { CharGrid } from "../components/CharGrid";
import { EpisodesContainer } from "../components/EpisodesContainer";

import * as Styled from "../styles/pages/home";
import { GlobalStyle } from "@/styles/globals";

import { CharacterProvider } from "../contexts/CharacterContext";

export const API_URL = "https://rickandmortyapi.com/api/character";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CharacterProvider>
          <Styled.SplitScreenContainer>
            <CharGrid characterOrder={1} />
            <Styled.Divider />
            <CharGrid characterOrder={2} />
          </Styled.SplitScreenContainer>
          <EpisodesContainer />
          <GlobalStyle />
        </CharacterProvider>
      </main>
    </>
  );
}
