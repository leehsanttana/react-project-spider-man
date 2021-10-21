import * as S from "./style";

const Image = ({ src }) => {
  return (
    <S.Image>
      <img src={src} />
    </S.Image>
  );
};

export default Image;
