import Button from "../Button";
import * as S from "./style";

const ModalError = ({ modal, setModal }) => {
  if (modal === true) {
    return (
      <S.Section>
        <S.Modal>
          <h1>❌</h1>
          <h2>Por favor, preencha as informações!</h2>
          <Button text="Fechar" onClick={() => setModal(false)} />
        </S.Modal>
      </S.Section>
    );
  }

  return null;
};

export default ModalError;
