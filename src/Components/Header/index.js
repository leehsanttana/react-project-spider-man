import React from "react";
import * as S from "./style";

import Image from "../Image/index";
import brand from "../../images/brand.png";

const Header = () => {
  const [active, setActive] = React.useState(false);

  function showMenu() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <S.Header>
      <Image src={brand} />
      <button onClick={showMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul className={active === true ? "active" : ""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">O universo</a>
        </li>
        <li>
          <a href="#costumes">Trajes</a>
        </li>
        <li>
          <a href="#subscribe">Inscreva-se</a>
        </li>
      </ul>
    </S.Header>
  );
};

export default Header;
