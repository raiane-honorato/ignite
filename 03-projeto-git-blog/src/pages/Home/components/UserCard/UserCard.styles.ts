import styled from "styled-components";

export const UserCardSection = styled.section`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 10px;
  width: fit-content;
  margin: 0 auto;
  transform: translate(0, -50px);

  .user-text-info-container {
    position: relative;

    a {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  img {
    width: 148px;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p,
  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 160%;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
  }

  .span-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;
