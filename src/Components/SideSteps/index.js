import * as S from "./style";
import { Link } from "react-router-dom";

const SideSteps = ({ step, title, path, active }) => {
  return (
    <S.Container>
      <Link to={path} className="link">
        <S.Step active={active}>{step}</S.Step>
        <h3>{title}</h3>
      </Link>
    </S.Container>
  );
};

export default SideSteps;
