import styled from "styled-components";

import hamburger from "assets/shared/icon-hamburger.svg";

export const Header = styled.header`
  min-height: 6rem;

  display: grid;
  grid-template-columns: 1fr minmax(0, 32rem) 8rem minmax(0, 40rem) 1fr;

  *:first-child {
    grid-column: 2;
  }

  *:last-child {
    grid-column: 3 / -1;
  }

  img {
    padding-block: 1.5rem;
  }
`;

export const NavContainer = styled.div`
  /* Frosted glass effect */
  background-color: rgba(var(--clr-white) / 0.04);
  backdrop-filter: blur(1.5rem);
`;

export const Nav = styled.nav`
  a {
    outline: none;
    text-decoration: none;
    letter-spacing: var(--spacing-2);
    color: inherit;
  }

  a span {
    font-weight: bold;
  }
`;

export const NavToggle = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: absolute;
    z-index: 1000;
    right: 1rem;
    top: 2rem;
    background: none;
    border: none;
    background-image: url(${hamburger});
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    cursor: pointer;
  }
`;
