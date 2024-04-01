import styled from "styled-components";
import { media } from "../../../../../styles/global";

export const CoffeeCartListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 64px;
  }

  .price {
    font-size: ${(props) => props.theme.textStyles.balooTitleS.fontSize};
    line-height: ${(props) => props.theme.textStyles.balooTitleS.lineHeight};
    font-family: ${(props) => props.theme.textStyles.balooTitleS.fontFamily};
    font-weight: ${(props) => props.theme.textStyles.balooTitleS.fontWeight};
  }

  .name-amount-container {
    flex-grow: 1;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 0.5rem;

    & > span {
      grid-column: 1/3;
    }

    input {
      background-color: ${(props) => props.theme["base-button"]};
      border-color: transparent;
      border-radius: 6px;
      text-align: center;
    }

    button {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      text-transform: uppercase;
      background-color: ${(props) => props.theme["base-button"]};
      border-radius: 6px;

      font-size: ${(props) => props.theme.textStyles.regularS.fontSize};
      line-height: ${(props) => props.theme.textStyles.regularS.lineHeight};
      font-family: ${(props) => props.theme.textStyles.regularS.fontFamily};
    }
  }
`;
