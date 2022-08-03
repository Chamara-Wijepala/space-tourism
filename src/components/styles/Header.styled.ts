import styled from "styled-components";

export const Header = styled.header``;

export const Nav = styled.nav`
  /* Frosted glass effect */
  background-color: rgba(var(--clr-white) / 0.04);
  backdrop-filter: blur(1.5rem);

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
