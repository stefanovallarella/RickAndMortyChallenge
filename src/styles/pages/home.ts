import styled from 'styled-components'

export const CharContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  margin: auto;
  padding: 26px;
  flex-wrap: wrap;
  gap: 26px;
`

export const PaginationContainer = styled.div`
    position: sticky;
    bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    margin: auto;
    gap: 12px;
    transform: translateX(-100%);
`

export const BackButton = styled.button`
  z-index: 999;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 16px;
  background: black;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PageCount = styled.input`
  z-index: 999;
  padding: 10px;
  max-width: 75px;
  text-align: center;
  font-size: 16px;
  color: white;
  background: black;
  border: none;
`

export const NextButton = styled.button`
  z-index: 999;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 16px;
  background: black;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const SplitScreenContainer = styled.div`
  display: flex;
  height: 60vh;
  overflow-y: auto;
`;

export const Pane = styled.div`
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  background-color: white;
  color: white;
  justify-items: center;
  align-items: center;
  margin: 0 auto;

  /* @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  } */
`;


export const EpisodeSection = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
`;




export const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 200px; 
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
  padding: 8px;
`;

export const EpisodeContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 16px;
  border: 1px solid #ccc;
  margin: 8px;
  background-color: #f9f9f9;
`;

export const Divider = styled.div`
  width: 20px;
  height: 100%;
  background-color: black;
`;

