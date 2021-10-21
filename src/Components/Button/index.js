import * as S from "./style";

const Button = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default Button;
