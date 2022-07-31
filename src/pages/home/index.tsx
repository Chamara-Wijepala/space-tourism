import "./styles/bg.module.css";
import LargeLink from "styles/LargeLink.styled";
import Hero from "./styles/home.styled";

function Home() {
  return (
    <>
      <Hero>
        <h1>
          SO, YOU WANT TO TRAVEL TO <br />
          <span>SPACE</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </Hero>
      <div>
        <LargeLink to="/destination/:id" replace>
          EXPLORE
        </LargeLink>
      </div>
    </>
  );
}

export default Home;
