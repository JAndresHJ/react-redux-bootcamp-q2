import styled from 'styled-components';

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: auto 1fr;
  grid-gap: 20px;
  justify-content: space-evenly;
  margin: 30px 0;
`;
