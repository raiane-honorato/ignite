import styled from "styled-components";

export const RepoDetailsSection = styled.section`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;

  header {
    background-color: ${(props) => props.theme["base-profile"]};
    margin: 0 2rem;
    padding: 2rem 2.5rem;
    gap: 2rem;
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
    transform: translate(0, -50px);

    .link-container {
      display: flex;
      justify-content: space-between;

      a {
        color: ${(props) => props.theme.blue};
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 160%;
        text-decoration: none;
        text-transform: uppercase;
      }
    }

    h2 {
      margin-top: 0.5rem;
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-title"]};
      line-height: 130%;
    }

    .span-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
  }
`;
