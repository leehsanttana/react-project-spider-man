import * as S from "./style";
import MilesImage from "../../images/miles.png";
import bag from "../../images/bag.png";

import Subtitle from "../Subtitle";
import Image from "../Image";

const AboutSection = () => {
  return (
    <S.AboutSection id="about">
      <S.ImageBg></S.ImageBg>
      <S.Info>
        <Subtitle subtitle="Um novo Universo" />
        <p>
          Na mais nova aventura do universo de Marvel's Spider-Man, o
          adolescente Miles Morales está se adaptando a um novo lar enquanto
          segue os passos de seu mentor, Peter Parker, como novo Spider-Man.
        </p>
        <p>
          Mas quando uma violenta disputa de forças ameaça destruir sua
          vizinhança, o aspirante a herói percebe que com grandes poderes também
          vêm grandes responsabilidades. Para salvar a Nova York da Marvel,
          Miles deve reconhecer e assumir o título de Spider-Man.
        </p>
        <S.Button>
          Compre Agora <img src={bag} />
        </S.Button>
      </S.Info>
      <S.Image>
        <Image src={MilesImage} />
      </S.Image>
    </S.AboutSection>
  );
};

export default AboutSection;
