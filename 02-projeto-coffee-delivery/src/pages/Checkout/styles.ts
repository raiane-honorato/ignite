import styled from "styled-components";
import { media } from "../../styles/global";

export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 70rem;

  h2 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: ${(props) => props.theme.textStyles.titleXl.fontSize};
    font-family: ${(props) => props.theme.textStyles.titleXl.fontFamily};
    line-height: ${(props) => props.theme.textStyles.titleXl.lineHeight};
  }

  h4 {
    font-size: ${(props) => props.theme.textStyles.regularL.fontSize};
    font-family: ${(props) => props.theme.textStyles.regularL.fontFamily};
    line-height: ${(props) => props.theme.textStyles.regularL.lineHeight};
    font-weight: ${(props) => props.theme.textStyles.regularL.fontWeight};
  }

  .checkout-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    border: 1px solid ${(props) => props.theme.purple};
    width: fit-content;
    min-width: 526px;
    border-radius: 6px 36px;

    ${media.mobile} {
      min-width: auto;
      width: 100%;
    }
  }

  .checkout-item-container {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .icon-container {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkout-item-container:nth-of-type(1) .icon-container {
    background-color: ${(props) => props.theme["purple"]};
  }

  .checkout-item-container:nth-of-type(2) .icon-container {
    background-color: ${(props) => props.theme["yellow"]};
  }

  .checkout-item-container:nth-of-type(3) .icon-container {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  .checkout-item {
    font-size: ${(props) => props.theme.textStyles.regularM.fontSize};
    font-family: ${(props) => props.theme.textStyles.regularM.fontFamily};
    line-height: ${(props) => props.theme.textStyles.regularM.lineHeight};
    font-weight: ${(props) => props.theme.textStyles.regularM.fontWeight};

    .bold {
      font-weight: bold;
    }
  }
`;
