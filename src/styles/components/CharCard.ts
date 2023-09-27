import styled from 'styled-components'

export const CharContent = styled.div`
  height: 185px;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  color: gray;
  transition: all 0.2s;
  margin-bottom: 0;
  position: relative;

  > span {
    display: none;
    color: black;
    font-weight: bold;

    margin-top: 5px;
  }

  &:hover {
    opacity: 80%;

    > span {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      padding: 1rem;
      text-align: center;
      font-size: 16px;
    }
  }
`;

export const CharImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

