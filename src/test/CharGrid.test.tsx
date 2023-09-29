import React from "react";
import axios from "axios";
import { render, waitFor } from "@testing-library/react";
import CharGrid, { API_URL } from "@/components/CharGrid";

import MockAdapter from "axios-mock-adapter";

import { CharacterProvider } from "../contexts/CharacterContext";

const mockAxios = new MockAdapter(axios);

const mockApiResponse = {
  info: {
    count: 2,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Character 1",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      image: "image1.jpg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Character 2",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      image: "image2.jpg",
      episode: [
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:48:46.250Z",
    },
  ],
};

mockAxios.onGet(API_URL).reply(200, mockApiResponse);

test("fetches and displays character data", async () => {
  const { getByText, getAllByText } = render(
    <CharacterProvider>
      <CharGrid characterOrder={1} />
    </CharacterProvider>
  );

  await waitFor(() => {
    expect(getByText("Alive")).toBeInTheDocument();
    const humanElements = getAllByText("Human");
    humanElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
