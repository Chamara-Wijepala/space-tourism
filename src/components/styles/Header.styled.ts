import styled from "styled-components";

import hamburger from "assets/shared/icon-hamburger.svg";

interface INavContainerProps {
  navToggleState: boolean;
}

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

export const NavContainer = styled.div<INavContainerProps>`
  /* Frosted glass effect */
  background-color: rgba(var(--clr-white) / 0.04);
  backdrop-filter: blur(1.5rem);

  @media (max-width: 767px) {
    position: fixed;
    inset: 0 0 0 30%;
    padding: min(20rem, 15vh) 2rem;
    transform: translateX(
      ${({ navToggleState }) => (navToggleState ? "0%" : "100%")}
    );
    transition: transform 300ms ease-in-out;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    outline: none;
    text-decoration: none;
    letter-spacing: var(--spacing-2);
    color: inherit;
  }

  a span {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    a.active {
      border: 0;
    }
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
