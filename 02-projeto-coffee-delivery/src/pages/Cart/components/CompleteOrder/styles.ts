import styled from "styled-components";
import { media } from "../../../../styles/global";

export const CompleteOrderSection = styled.section`
  width: 60%;

  ${media.mobile} {
    width: 100%;
  }

  h2 {
    font-size: ${(props) => props.theme.textStyles.titleXS.fontSize};
    line-height: ${(props) => props.theme.textStyles.titleXS.lineHeight};
    font-family: ${(props) => props.theme.textStyles.titleXS.fontFamily};
    font-weight: ${(props) => props.theme.textStyles.titleXS.fontWeight};
  }

  h3 {
    font-size: ${(props) => props.theme.textStyles.regularM.fontSize};
    line-height: ${(props) => props.theme.textStyles.regularM.lineHeight};
    font-family: ${(props) => props.theme.textStyles.regularM.fontFamily};
    font-weight: ${(props) => props.theme.textStyles.regularM.fontWeight};
  }

  span,
  input {
    font-size: ${(props) => props.theme.textStyles.regularS.fontSize};
    line-height: ${(props) => props.theme.textStyles.regularS.lineHeight};
    font-family: ${(props) => props.theme.textStyles.regularS.fontFamily};
  }

  form {
    margin-top: 0.9375rem;
  }

  section {
    background-color: ${(props) => props.theme["base-cart"]};
    padding: 2.5rem;
    border-radius: 6px;
    margin-bottom: 0.75rem;

    .section-description {
      display: grid;
      grid-template-columns: min-content auto;
      grid-template-rows: auto auto;
      column-gap: 0.5rem;

      & > :first-child {
        grid-row: 1/3;
      }

      ${media.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .input-wrapper {
      display: grid;
      grid-template-columns: 30% auto 10%;
      column-gap: 0.75rem;
      row-gap: 1rem;
      margin-top: 2.5rem;

      ${media.mobile} {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      input {
        background-color: ${(props) => props.theme["base-input"]};
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme["base-button"]};
      }

      #street {
        grid-row: 2;
        grid-column: 1/4;
      }

      #number,
      #additionalInfo {
        grid-row: 3;
      }

      #additionalInfo {
        grid-column: 2/4;
      }

      #city,
      #state {
        grid-row: 4;
      }

      #city {
        grid-column: 1/3;
      }
    }

    .buttons-wrapper {
      display: flex;
      gap: 0.75rem;
      margin-top: 2.5rem;

      ${media.mobile} {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      button {
        background-color: ${(props) => props.theme["base-button"]};
        padding: 1rem;
        border-radius: 6px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 0.75rem;

        svg {
          flex-shrink: 0;
        }

        &[aria-selected="true"] {
          background-color: ${(props) => props.theme["purple-light"]};
          border: 1px solid ${(props) => props.theme["purple"]};
        }
      }
    }
  }
`;
