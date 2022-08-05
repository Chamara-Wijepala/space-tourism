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
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <div className="line" />
      </div>

      <S.NavToggle
        aria-controls="primary-navigation"
        navToggleState={navToggleState}
        onClick={handleNavToggle}
      >
        <span className="sr-only" aria-expanded={navToggleState}>
          Menu
        </span>
      </S.NavToggle>

      <S.NavContainer navToggleState={navToggleState}>
        <S.Nav className="underline-indicators" id="primary-navigation">
          <NavLink to="/home">
            <span aria-hidden="true">00</span> HOME
          </NavLink>
          <NavLink to="/destination/:id">
            <span aria-hidden="true">01</span> DESTINATION
          </NavLink>
          <NavLink to="/crew/:id">
            <span aria-hidden="true">02</span> CREW
          </NavLink>
          <NavLink to="/technology/:id">
            <span aria-hidden="true">03</span> TECHNOLOGY
          </NavLink>
        </S.Nav>
      </S.NavContainer>
    </S.Header>
  );
}

export default Header;
