import styled from "styled-components";
import { media } from "../../../styles/global";

export const HeroBackground = styled.div`
  padding: 5.75rem 1rem;
  background: url("src/assets/hero-background.png") no-repeat center / cover;
`;

export const HeroContainer = styled.main`
  max-width: 70rem;
  margin: auto;

  display: grid;
  grid-template-columns: 52% 48%;
  column-gap: 3.5rem;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .coffee-img {
    max-width: calc(100% - 1.75rem);
    grid-row: 1 / 3;
    grid-column: 2;
  }

  h2 {
    font-size: ${(props) => props.theme.textStyles.titleXl.fontSize};
    font-family: ${(props) => props.theme.textStyles.titleXl.fontFamily};
    line-height: ${(props) => props.theme.textStyles.titleXl.lineHeight};
    margin-bottom: 2rem;
  }

  p {
    font-size: ${(props) => props.theme.textStyles.regularL.fontSize};
    font-family: ${(props) => props.theme.textStyles.regularL.fontFamily};
    line-height: ${(props) => props.theme.textStyles.regularL.lineHeight};
    margin-bottom: 3rem;
  }

  .list-icons {
    list-style: none;
    margin-top: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;

    .icon-container {
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li:nth-of-type(1) .icon-container {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }

    li:nth-of-type(2) .icon-container {
      background-color: ${(props) => props.theme["base-text"]};
    }

    li:nth-of-type(3) .icon-container {
      background-color: ${(props) => props.theme["yellow"]};
    }

    li:nth-of-type(4) .icon-container {
      background-color: ${(props) => props.theme["purple"]};
    }

    li {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    span {
      font-size: ${(props) => props.theme.textStyles.regularM.fontSize};
      line-height: ${(props) => props.theme.textStyles.regularM.lineHeight};
      font-family: ${(props) => props.theme.textStyles.regularM.fontFamily};
    }
  }
`;
