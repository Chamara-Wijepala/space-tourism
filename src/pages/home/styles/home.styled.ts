import styled from "styled-components";

const Hero = styled.div`
  color: rgb(var(--clr-light));

  h1 {
    font-size: var(--fs-500);
    letter-spacing: var(--spacing-1);
  }

  span {
    font-size: var(--fs-900);
    font-family: var(--ff-bellefair);
    line-height: 1.1;
    color: rgb(var(--clr-white));
  }
`;

export default Hero;
