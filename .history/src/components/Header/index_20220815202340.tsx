import { HeaderContainer, HeaderContent } from "./styles";
import LogoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />
        <button>Nova Transação</button>
      </HeaderContent>
    </HeaderContainer>
  );
}
