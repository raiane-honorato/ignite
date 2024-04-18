import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  max-width: 75rem;

  .search-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 160%;
    }

    span {
      line-height: 160%;
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;

    input {
      flex-grow: 1;
      background-color: ${(props) => props.theme["base-input"]};
      padding: 0.75rem 1rem;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-label"]};
      border: 1px solid ${(props) => props.theme["base-border"]};
      border-radius: 6px;
    }

    button {
      background-color: ${(props) => props.theme["base-post"]};
      border: 1px solid ${(props) => props.theme["base-border"]};
      border-radius: 6px;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-text"]};
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
