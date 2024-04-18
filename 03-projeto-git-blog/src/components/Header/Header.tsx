import cover from "../../assets/Cover.svg";
import { HeaderContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} alt="" />
    </HeaderContainer>
  );
}
