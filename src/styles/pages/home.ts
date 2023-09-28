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
  flex-direction: column;

  @media (min-width: 768px) {
  height: 60vh;
  overflow-y: auto;
  flex-direction: row;
  }


`;

export const PaneContainer = styled.div`
  height: 300px;
  overflow-y: hidden;

  
  &::-webkit-scrollbar {
    display: none;
    width: 5px; 
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4; 
    border-radius: 5px; 
  }

 
  &::-webkit-scrollbar-track:hover {
    background-color: #ddd; 
  }

  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }

  @media (min-width: 480px) {
    height: 370px;
    max-height: 370px;
  }
  @media (min-width: 768px) {
    flex: 1;
    max-height: none;
    overflow-y: auto;
    height: 60vh;
    max-height: none;

  } 

  @media (min-width: 1024px) {
    &::-webkit-scrollbar {
      display: block;
    }
  } 


  
`;

export const Pane = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-template-rows: repeat(2, 150px);
    grid-auto-flow: column;
    background-color: white;
    color: white;
    /* justify-items: center;
    align-items: center; */
    margin: 0 auto;

    
    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 185px);
      grid-template-rows: repeat(2, 185px);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
      grid-template-rows: auto;
      grid-auto-flow: row;
    }
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
  width: 100%;
  height: 10px;
  background-color: black;

  @media (min-width: 768px){
    width: 10px;
    height: 100%;
  }
`;

