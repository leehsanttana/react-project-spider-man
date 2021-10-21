import { Link } from "react-router-dom";
import { useForm } from "../../../Context/FormContext";
import ModalError from "../../ModalError";

import SideSteps from "../../SideSteps";
import * as S from "./style";

const Theme = ({ children }) => {
  const { step, modal, setModal } = useForm();
  return (
    <S.Section>
      <ModalError modal={modal} setModal={setModal} />
      <S.Steps>
        <SideSteps
          path="/stepform1"
          step="1"
          title="Informações"
          active={step === 1}
        />
        <SideSteps
          path="/stepform2"
          step="2"
          title="Forma de Cadastro"
          active={step === 2}
        />
        <SideSteps
          path="/stepform3"
          step="3"
          title="Finalizar"
          active={step === 3}
        />
      </S.Steps>
      <S.Container>{children}</S.Container>
      <Link className="btn-back-menu" to="/">
        {" "}
        Retornar a Página principal{" "}
      </Link>
    </S.Section>
  );
};

export default Theme;
