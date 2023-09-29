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
