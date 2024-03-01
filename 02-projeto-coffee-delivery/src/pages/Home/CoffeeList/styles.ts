import styled from "styled-components";

export const CoffeeListSection = styled.section`
  max-width: 70rem;
  margin: 0 auto;

  & > ul {
    list-style: none;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    row-gap: 2.5rem;
    padding: 1rem;
  }
`;
