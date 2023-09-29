import styled from 'styled-components';

interface CharDetailsProps {
  status: string;
}

interface CharContentProps {
  isSelected: boolean;
}


export const CharDetails = styled.div<CharDetailsProps>`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  color: black;
  margin: 0;
  padding: 4px;
  text-align: center;
  z-index: 2; 
  transition: all 0.2s;

  
  > p {
    &:first-child {
      font-size: 14px;
      font-weight: 700;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
    > span { 
      font-weight: bold;
      color: ${(props) => {
        switch (props.status) {
          case 'Alive':
            return 'green';
          case 'Dead':
            return 'red';
          default:
            return 'black';
        }
      }};
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 6px;
  }

  @media (min-width: 1024px){
    display: none;
  }
`;


export const CharContent = styled.button<CharContentProps>`
  height: 150px;
  width: 150px;
  min-width: 150px;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  border: none;
  color: gray;
  transition: all 0.2s;
  margin-bottom: 0;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  ${(props) =>
    props.isSelected &&`
      opacity: 80%;
      ${CharDetails} {
        display: block;
       }
  `}


  @media (min-width: 480px){
    height: 185px;
    width: 185px;
    min-width: 185px;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: 185px;
  } 

  @media (min-width: 1024px){
    &:hover ${CharDetails} {
     display: block;
    }
  }
`;

export const CharImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

