import * as S from "./style";
import RecursosWallpaper1 from "../../images/recursos-wallpaper-1.png";
import RecursosWallpaper2 from "../../images/recursos-wallpaper-2.png";
import RecursosWallpaper3 from "../../images/recursos-wallpaper-3.png";

import Subtitle from "../Subtitle";
import Image from "../Image";

const ResourcesSection = () => {
  return (
    <S.ResourcesSection>
      <Subtitle subtitle="Recursos Principais" />
      <S.Container>
        <S.Card>
          <Image src={RecursosWallpaper1} />
          <h3>A trajetória de Miles Morales</h3>
          <p>
            Miles Morales descobre poderes incríveis e explosivos que o
            diferenciam de seu mentor, Peter Parker. Domine seus ataques Venom
            bioelétricos, poderes de camuflagem, truques espetaculares com teia,
            além de dispositivos e habilidades.
          </p>
        </S.Card>
        <S.Card>
          <Image src={RecursosWallpaper2} />
          <h3>Uma guerra pelo poder</h3>
          <p>
            Uma guerra pelo controle da Nova York da Marvel estourou entre uma
            empresa de energia desonesta e um exército criminoso de alta
            tecnologia. Com o seu novo lar ameaçado pelo conflito, Miles deve
            descobrir o preço de se tornar um herói e decidir o que sacrificar
            pelo bem maior.
          </p>
        </S.Card>
        <S.Card>
          <Image src={RecursosWallpaper3} />
          <h3>Um lar novo e vibrante</h3>
          <p>
            Atravesse as ruas cobertas de neve do animado e movimentado bairro
            de Miles enquanto ele se adapta à nova vizinhança. Quando os limites
            entre a sua vida pessoal e o combate ao crime começam a desaparecer,
            Miles descobre em quem pode confiar e como é realmente se sentir em
            casa.
          </p>
        </S.Card>
      </S.Container>
    </S.ResourcesSection>
  );
};

export default ResourcesSection;
