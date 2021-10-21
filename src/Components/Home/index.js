import * as S from "./style";

import logo from "../../images/logo.png";

import Header from "../Header/index";
import NextSectionButton from "../NextSectionButton";
import Image from "../Image/index";

const Home = () => {
  return (
    <S.Home id="home">
      <Header />
      <S.Logo>
        <Image src={logo} />
      </S.Logo>
      <S.Container>
        <h1>Seja mais. Seja você mesmo</h1>
        <h2>
          Acompanhe a trajetória de Miles Morales enquanto ele aprende a dominar
          poderes incríveis e explosivos para se tornar o novo Spider-Man.
        </h2>
        <NextSectionButton />
      </S.Container>
    </S.Home>
  );
};

export default Home;
