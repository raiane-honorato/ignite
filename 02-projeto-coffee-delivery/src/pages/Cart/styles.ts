import styled from "styled-components";
import { media } from "../../styles/global";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2.5rem;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
