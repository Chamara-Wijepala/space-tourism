import styled from "styled-components";
import { Link } from "react-router-dom";

const Largelink = styled(Link)`
  outline: none;
  text-decoration: none;
  color: rgb(var(--clr-dark));
  background-color: rgb(var(--clr-white));
  font-family: var(--ff-bellefair);
  font-size: var(--fs-600);
  padding: 0 2em;
  aspect-ratio: 1;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  transition: 0.3s;

  :hover,
  :focus {
    box-shadow: 0 0 0 var(--fs-700) rgba(var(--clr-white) / 0.136);
  }
`;

export default Largelink;
