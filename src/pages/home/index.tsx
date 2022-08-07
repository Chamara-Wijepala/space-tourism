import LargeLink from "styles/LargeLink.styled";
import * as S from "./Home.styled";

function Home() {
  return (
    <S.Home>
      <S.Hero>
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
      </S.Hero>
      <div>
        <LargeLink to="/destination/:id" replace>
          EXPLORE
        </LargeLink>
      </div>
    </S.Home>
  );
}

export default Home;
