import * as S from "./style";

const SelectBox = ({ text, id, selected, onClick }) => {
  return (
    <S.Selected id={id} selected={selected} onClick={onClick}>
      <p>{text}</p>
    </S.Selected>
  );
};

export default SelectBox;
