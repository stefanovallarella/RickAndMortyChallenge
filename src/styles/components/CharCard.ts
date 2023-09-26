import styled from 'styled-components'
import Link from 'next/link'

export const CharContent = styled.div`
  height: 200px;
  width: 200px;
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

export const AddFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5%;
  right: 5%;
  background: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.theme.colors.orange};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
`
