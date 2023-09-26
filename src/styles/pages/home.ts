import styled from 'styled-components'

export const FilterForm = styled.form`
  margin: 26px auto 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  padding: 0 26px;
  gap: 8px;

  > div {
    width: 100%;
    > input {
      width: 100%;

      padding: 8px;
      border: 1px solid red;
      border-radius: 8px;
    }
    > span {
      font-size: 16px;
      color: red;
    }
  }

  > button {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: none;
    color: red;
    font-size: red;
    background: red;
    padding: 9px 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const FilteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 26px auto 0;
  text-align: center;
  padding: 8px;
  font-size: 16px;
`

export const FilterSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
  padding: 8px;
  border-radius: 16px;
  margin-top: 8px;
`

export const ClearButton = styled.button`
  height: 22px;
  background: transparent;
  border: 0;
  padding: 3px;
  color: red;
  cursor: pointer;
`

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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 12px;
  margin-bottom: 56px;
`

export const BackButton = styled.button`
  z-index: 999;
  border-radius: 4px;
  border: none;
  color: red;
  font-size: 16px;
  background: red;
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
  font-size: 16px;
  color: white;
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
  height: 100vh;
`;

export const Pane = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: white;
  color: white;
  justify-items: center;
  align-items: center;
`;

