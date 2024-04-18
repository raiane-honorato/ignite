import styled from "styled-components";

export const ListContainer = styled.ul`
  margin: 3rem 0;
  width: 100%;
  padding: 0 2rem;
  max-width: 75rem;

  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  list-style: none;

  li {
    background-color: ${(props) => props.theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;
    cursor: pointer;

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      a {
        color: ${(props) => props.theme["base-title"]};
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 160%;
        text-decoration: none;
      }

      span {
        line-height: 160%;
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
      }
    }

    main {
    }
  }
`;
