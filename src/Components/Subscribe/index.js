import * as S from "./style";
import { Link } from "react-router-dom";

import Subtitle from "../Subtitle/index";

const Subscribe = () => {
  return (
    <S.Subscribe id="subscribe">
      <Subtitle subtitle="Inscreva-se e fique por dentro das novidades" />
      <p>É Rapidinho. Só vai levar um minuto!</p>
      <Link to="stepform1">Inscreva-se</Link>
    </S.Subscribe>
  );
};

export default Subscribe;
