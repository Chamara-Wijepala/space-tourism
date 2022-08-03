import { NavLink } from "react-router-dom";

import logo from "assets/shared/logo.svg";
import * as S from "./styles/Header.styled";

function Header() {
  return (
    <S.Header>
      <img src={logo} alt="Logo" />

      <S.Nav className="underline-indicators" id="primary-navigation">
        <NavLink to="">
          <span>00</span> HOME
        </NavLink>
        <NavLink to="/destination/:id">
          <span>01</span> DESTINATION
        </NavLink>
        <NavLink to="/crew/:id">
          <span>02</span> CREW
        </NavLink>
        <NavLink to="/technology/:id">
          <span>03</span> TECHNOLOGY
        </NavLink>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
