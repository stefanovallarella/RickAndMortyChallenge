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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: white;
  color: white;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
`;


export const EpisodeSection = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
`;

// export const EpisodeContainer = styled.div`
//   width: 33%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: auto;

//   > h1 {
//     font-size: 24px;
//     margin-bottom: 16px;
//   }
// `


// Styled components for the section title and scrollable container
export const SectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 200px; /* You can adjust the height as needed */
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
  padding: 8px;
`;

// Styled components for the EpisodeContainer
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


