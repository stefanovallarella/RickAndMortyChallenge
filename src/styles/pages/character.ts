import Link from 'next/link'
import styled from 'styled-components'

export const CharacterContainer = styled.div`
  margin: 26px auto 0;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #fff;
  border-radius: 8px;
  text-transform: none;
  text-decoration: none;
  border: none;
  color: red;
  background: red;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const Name = styled.h1`
  color: red;
  font-size: red;
  margin: 26px auto;
  text-align: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
  border: 2px solid red;
  margin-bottom: 26px;
  width: 100%;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;

  > strong {
    color: red;
    font-size: red;
    text-align: center;
  }

  > span {
    text-align: center;
    font-size: red;
  }
`
