import styled from "styled-components";

export const ItemContainer = styled.li`
  background-color: ${(props) => props.theme["base-cart"]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.5rem 2.5rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    transform: translate(0, -20px);
  }

  .tag-list {
    list-style: none;
    display: flex;
    gap: 0.25rem;
  }

  .tag {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-size: ${(props) => props.theme.textStyles.tag.fontSize};
    line-height: ${(props) => props.theme.textStyles.tag.lineHeight};
    font-family: ${(props) => props.theme.textStyles.tag.fontFamily};
    font-weight: ${(props) => props.theme.textStyles.tag.fontWeight};
  }

  h3 {
    font-size: ${(props) => props.theme.textStyles.balooTitleS.fontSize};
    line-height: ${(props) => props.theme.textStyles.balooTitleS.lineHeight};
    font-family: ${(props) => props.theme.textStyles.balooTitleS.fontFamily};
    font-weight: ${(props) => props.theme.textStyles.balooTitleS.fontWeight};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: ${(props) => props.theme.textStyles.regularM.fontSize};
    line-height: ${(props) => props.theme.textStyles.regularM.lineHeight};
    font-family: ${(props) => props.theme.textStyles.regularM.fontFamily};
    margin-bottom: 2.0625rem;
    color: ${(props) => props.theme["base-label"]};
  }

  .card-footer {
    display: flex;
    align-items: stretch;
    width: 100%;
    justify-content: space-between;

    & > span {
      span:first-of-type {
        font-size: ${(props) => props.theme.textStyles.regularS.fontSize};
        line-height: ${(props) => props.theme.textStyles.regularS.lineHeight};
        font-family: ${(props) => props.theme.textStyles.regularS.fontFamily};
        color: ${(props) => props.theme["base-text"]};
      }

      span:last-of-type {
        font-size: ${(props) => props.theme.textStyles.titleM.fontSize};
        line-height: ${(props) => props.theme.textStyles.titleM.lineHeight};
        font-family: ${(props) => props.theme.textStyles.titleM.fontFamily};
        font-weight: ${(props) => props.theme.textStyles.titleM.fontWeight};
        color: ${(props) => props.theme["base-text"]};
      }
    }

    & > div {
      display: flex;
      gap: 1rem;
      align-items: stretch;

      input {
        background-color: ${(props) => props.theme["base-button"]};
        border-color: transparent;
        border-radius: 6px;
        text-align: center;
      }

      button {
        cursor: pointer;
        padding: 0.5rem;
        background-color: ${(props) => props.theme["purple-dark"]};
        border-radius: 6px;
        border-color: transparent;
      }
    }
  }
`;
