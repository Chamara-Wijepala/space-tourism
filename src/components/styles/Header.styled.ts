import styled from "styled-components";

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
