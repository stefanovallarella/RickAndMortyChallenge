import styled from 'styled-components'

interface Props {
  image: string;
}

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
    bottom: 3px;
    /* bottom: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    margin: 5px auto;
    gap: 12px;
    z-index: 10;

    @media (min-width: 768px){
      bottom: 0;
    }
`

export const BackButton = styled.button`
  border-radius: 6px;
  border: none;
  color: black;
  font-size: 14px;
  font-weight: bold;
  background: white;
  padding: 6px 8px;
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
  padding: 6px;
  max-width: 75px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: black;
  border: none;
`

export const NextButton = styled.button`
  border-radius: 6px;
  border: none;
  color: black;
  font-size: 14px;
  background: white;
  font-weight: bold;
  padding: 6px 8px;
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
  background-color: black;

  @media (min-width: 768px) {
    height: 60vh;
    flex-direction: row;
  }

`;

export const PaneContainer = styled.div`
  height: 335px;
  position: relative;
  overflow-y: hidden;
  @media (min-width: 480px) {
    height: 405px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
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
  background-color: black;
  color: white;
  margin: 0 auto;


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
    grid-template-columns: repeat(2, 185px);
    grid-template-rows: repeat(2, 185px);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-template-rows: auto;
    grid-auto-flow: row;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: block;
    }
  }
`;


export const EpisodeSection = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;

  background-image: url('rickandmorty-bg-episodes.jpg');
  background-size: cover;
  background-position: center center;	
  

  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`;


export const SectionTitle = styled.h1`
  height: 70px;
  font-size: 20px;
  margin-bottom: 8px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p:first-child {
    display: inline-block;
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
    background: rgba(255, 255, 255, 0.8);
    padding: 4px; 
    border-radius: 4px; 
  }

  p:last-child {
  background-color: white;
  padding: 4px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;

  }

`;

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 200px; 
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 12px;
  border-radius: 4px;

  & > p{
    margin: 4px auto;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 5px; 
    height: 5px;
  }

`;

export const EpisodeContainer = styled.div<Props>`
  position: relative;
  width: 280px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  z-index: 0;

  @media (min-width: 768px) {
    width: 33%;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(4px);
    z-index: -1; 
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: black;
  display: none;

  @media (min-width: 768px){ 
    display: block;
    width: 10px;
    height: 100%;
  }
`;


export const SelectCharacter = styled.p`
    font-size: 12px;
    color: white;
    margin: 0 auto;
    padding: 6px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    max-width: 150px;
    position: absolute;
    top: 0;
`;
