import styled from "styled-components";

export const HeaderContainer = styled.header<{ isLocationDefined: boolean }>`
  nav {
    max-width: 70rem;
    margin: auto;
    padding: 2rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    & a {
      display: block;
    }

    & > div {
      display: flex;
      gap: 0.75rem;
    }

    & .location-container {
      display: flex;
      gap: 0.25rem;
      padding: 10px 8px;
      border-radius: 6px;
      color: ${(props) => props.theme["purple-dark"]};
      background-color: ${(props) =>
        props.isLocationDefined
          ? props.theme["purple-light"]
          : props.theme["base-cart"]};

      & > .map-pin {
        color: ${(props) =>
          props.isLocationDefined
            ? props.theme.purple
            : props.theme["base-label"]};
      }
    }

    & .cart-button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 6px;
      background-color: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};

      span {
        position: absolute;
        top: -6px;
        right: -6px;
        background-color: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme.white};
        border-radius: 100%;
        height: 1rem;
        width: 1rem;
        text-align: center;

        font-size: ${(props) => props.theme.textStyles.textXs.fontSize};
        line-height: ${(props) => props.theme.textStyles.textXs.lineHeight};
        font-family: ${(props) => props.theme.textStyles.textXs.fontFamily};
        font-weight: ${(props) => props.theme.textStyles.textXs.fontWeight};
      }
    }
  }
`;
