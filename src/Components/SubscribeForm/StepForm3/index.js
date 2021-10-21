import * as S from "./style";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../../../Context/FormContext";

import Theme from "../Theme/index";

const StepForm2 = () => {
  const history = useHistory();
  const { name, email, step, setStep, subscribe } = useForm();

  useEffect(() => {
    if (name === "") {
      history.push("/stepform1");
    } else {
      setStep(3);
    }
  }, []);

  return (
    <Theme>
      <S.Section>
        <h1>Cadastro feito com sucesso!</h1>
        <small>Passo {step}/3</small>
        <S.Message>
          <p>
            Pronto {name}! Agora você recebá todas as noticias sobre{" "}
            <span>
              {(subscribe === 0 && `Marvel's Spider Man.`) ||
                (subscribe === 1 && `todos os jogos da Marvel.`) ||
                (subscribe === 2 && `a Playstation.`)}
            </span>{" "}
            no seguinte e-mail:
          </p>
          <h2>{email}</h2>
          <p>Obrigado por se inscrever!</p>
        </S.Message>
      </S.Section>
    </Theme>
  );
};

export default StepForm2;
