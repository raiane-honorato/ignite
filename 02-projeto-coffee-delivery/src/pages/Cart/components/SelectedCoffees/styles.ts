import styled from "styled-components";
import { media } from "../../../../styles/global";

export const SelectedCoffeesSection = styled.section`
  width: 40%;

  ${media.mobile} {
    width: 100%;
  }

  h2 {
    font-size: ${(props) => props.theme.textStyles.titleXS.fontSize};
    line-height: ${(props) => props.theme.textStyles.titleXS.lineHeight};
    font-family: ${(props) => props.theme.textStyles.titleXS.fontFamily};
    font-weight: ${(props) => props.theme.textStyles.titleXS.fontWeight};
    margin-bottom: 0.9375rem;
  }

  .cart-container {
    background-color: ${(props) => props.theme["base-cart"]};
    padding: 2.5rem;
    border-radius: 6px;
    margin-bottom: 0.75rem;

    ul {
      hr {
        margin: 1.5rem 0;
        height: 1px;
        border: none;
        background-color: ${(props) => props.theme["base-button"]};
      }
    }
  }

  .cart-summary {
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 0.75rem;

    & > span {
      font-size: ${(props) => props.theme.textStyles.regularS.fontSize};
      line-height: ${(props) => props.theme.textStyles.regularS.lineHeight};
      font-family: ${(props) => props.theme.textStyles.regularS.fontFamily};
    }

    & > span:nth-child(2n) {
      text-align: end;
    }

    & > span:nth-last-child(2),
    span:nth-last-child(1) {
      font-size: ${(props) => props.theme.textStyles.regularL.fontSize};
      line-height: ${(props) => props.theme.textStyles.regularL.lineHeight};
      font-family: ${(props) => props.theme.textStyles.regularL.fontFamily};
      font-weight: bold;
    }
  }

  .submit-button {
    width: 100%;
    background-color: ${(props) => props.theme["yellow"]};
    text-transform: uppercase;
    padding: 0.75rem;
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    margin-top: 1.5rem;

    &:disabled {
      background-color: ${(props) => props.theme["base-hover"]};
      cursor: not-allowed;

      &:hover {
        filter: none;
      }
    }
  }
`;
