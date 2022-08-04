import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "assets/shared/logo.svg";
import * as S from "./styles/Header.styled";

function Header() {
  const [navToggleState, setNavToggleState] = useState(false);

  const handleNavToggle = () => {
    setNavToggleState(!navToggleState);
  };

  return (
    <S.Header>
      <img src={logo} alt="Logo" />

      <S.NavToggle aria-controls="primary-navigation" onClick={handleNavToggle}>
        <span className="sr-only" aria-expanded={navToggleState}>
          Menu
        </span>
      </S.NavToggle>

      <S.NavContainer navToggleState={navToggleState}>
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
      </S.NavContainer>
    </S.Header>
  );
}

export default Header;
