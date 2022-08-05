import styled from "styled-components";

const GridContainer = styled.main`
  display: grid;
  place-items: center;
  text-align: center;
  padding-inline: 1rem;

  * {
    max-width: 50ch;
  }

  @media (min-width: 769px) {
    column-gap: 2rem;
    grid-template-columns:
      minmax(2rem, 1fr) repeat(2, minmax(0, 40rem))
      minmax(2rem, 1fr);
    text-align: left;

    *:first-child {
      grid-column: 2;
    }

    *:last-child {
      grid-column: 3;
    }
  }
`;

export default GridContainer;
