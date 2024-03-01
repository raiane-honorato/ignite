import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline:0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme["base-hover"]};
 }

 body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme["base-text"]};
  --webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }

 button {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
 }
`;

export const media = {
  mobile: "@media(max-width: 768px)",
};
