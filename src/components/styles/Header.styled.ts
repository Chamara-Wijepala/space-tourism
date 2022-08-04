import styled from "styled-components";

import hamburgerIcon from "assets/shared/icon-hamburger.svg";
import closeIcon from "assets/shared/icon-close.svg";

interface INavToggleStateProps {
  navToggleState: boolean;
}

export const Header = styled.header`
  min-height: 6rem;

  display: grid;
  grid-template-columns:
    minmax(1.5rem, 1fr) minmax(3rem, 32rem) 6rem minmax(20rem, 40rem)
    1fr;

  *:first-child {
    grid-column: 2;
  }

  *:last-child {
    grid-column: 3 / -1;
  }

  .logo-container {
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 2.5rem;
  }

  img {
    padding-block: 1.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns:
      minmax(1.5rem, 1fr) minmax(3rem, 32rem) 6rem minmax(0, 40rem)
      1fr;
  }

  @media (min-width: 1440px) {
    margin-block: 2.5rem;

    .line {
      content: "";
      position: relative;
      z-index: 1000;
      height: 1px;
      background: rgba(var(--clr-white) / 0.25);
      width: 100%;
      left: 4rem;
    }
  }
`;

export const NavContainer = styled.div<INavToggleStateProps>`
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
  gap: clamp(1.5rem, 5vw, 3.5rem);
  min-height: 100%;

  a {
    outline: none;
    text-decoration: none;
    letter-spacing: var(--spacing-2);
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.6rem;
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

  @media (min-width: 767px) {
    padding-inline: clamp(3rem, 8vw, 7rem);
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    /* padding-inline: 3rem; */

    a {
      letter-spacing: var(--spacing-3);
    }

    a span {
      display: none;
    }
  }
`;

export const NavToggle = styled.button<INavToggleStateProps>`
  display: none;

  :focus-visible {
    outline: 3px solid white;
    outline-offset: 3px;
  }

  @media (max-width: 767px) {
    display: block;
    position: absolute;
    z-index: 1000;
    right: 1rem;
    top: 2rem;
    background: none;
    border: none;
    /* This is a workaround as directly rendering image in url() method does not work with ts-styled-plugin */
    ${({ navToggleState }) =>
      navToggleState
        ? `background-image: url(${closeIcon});`
        : `background-image: url(${hamburgerIcon});`}
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
    cursor: pointer;
  }
`;
