import styled from "styled-components";
import { Link } from "react-router-dom";

const Largelink = styled(Link)`
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
`;

export default Largelink;
