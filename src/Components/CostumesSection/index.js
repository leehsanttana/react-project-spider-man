import React from "react";
import * as S from "./style";

import Subtitle from "../Subtitle/index";
import Image from "../Image";

const costumes = [
  {
    id: 0,
    name: "Traje Esportivo",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-esportivo_fc89.jpg"
  },
  {
    id: 1,
    name: "Traje Grande Responsabilidade",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-grande-responsabilidade_jpcn.jpg"
  },
  {
    id: 2,
    name: "Traje Amador",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-amador_pr4c.jpg"
  },
  {
    id: 3,
    name: "Traje S.P.O.R.T.",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-sport_3q49.jpg"
  },
  {
    id: 4,
    name: "Traje Animado",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-animado_a343.jpg"
  },
  {
    id: 5,
    name: "Traje Brooklyn Visions Academy",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-brooklyn-visions-academy_w4b3.jpg"
  },
  {
    id: 6,
    name: "Traje Capuz Carmesim",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-capuz-carmesim_jj88.jpg"
  },
  {
    id: 7,
    name: "Traje de A.T.A.C.",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-de-atac_d2c4.jpg"
  },
  {
    id: 8,
    name: "Traje do Fim",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-do-fim_kgfk.jpg"
  },
  {
    id: 9,
    name: "Traje Miles Morales 2099",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-miles-morales-2099_a4tb.jpg"
  },
  {
    id: 10,
    name: "Traje Into the Spider-verse",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-into-the-spider-verse_q7zb.jpg"
  },
  {
    id: 11,
    name: "Traje Clássico",
    url: "https://sm.ign.com/ign_br/screenshot/default/traje-classico_2xaa.jpg"
  },
  {
    id: 12,
    name: "Traje Orgulho do Harlem",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-orgulho-do-harlem_qs2y.jpg"
  },
  {
    id: 13,
    name: "Traje de Inverno",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-de-inverno_yd4u.jpg"
  },
  {
    id: 14,
    name: "Traje Miles Morales 2020",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-miles-morales-2020_nvt8.jpg"
  },
  {
    id: 15,
    name: "Traje de Matéria Programável",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-de-materia-programavel_k28d.jpg"
  },
  {
    id: 16,
    name: "Traje Soberania Roxa",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-soberania-roxa_26wc.jpg"
  },
  {
    id: 17,
    name: "Traje do gato da mercearia",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-do-gato-da-mercearia_1kcd.jpg"
  },
  {
    id: 18,
    name: "Traje de Spider-treino",
    url:
      "https://sm.ign.com/ign_br/screenshot/default/traje-de-spider-treino_19yc.jpg"
  }
];

const CostumesSection = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < costumes.length - 1) setActive(active + 1);
  }

  return (
    <S.CostumesSection id="costumes">
      <Subtitle subtitle="Escolha o seu traje para sua aventura" />
      <S.Container>
        <S.Slider
          ref={contentRef}
          style={{
            transform: `translateX(${position}px)`,
            transition: ".5s ease"
          }}
        >
          {costumes.map((costume) => (
            <S.Slide key={costume.id}>
              <Image src={costume.url} />
              <h1>{costume.name}</h1>
            </S.Slide>
          ))}
        </S.Slider>
      </S.Container>
      <S.Nav>
        <button onClick={slidePrev}>&#129152;</button>
        <button onClick={slideNext}>&#129154;</button>
      </S.Nav>
    </S.CostumesSection>
  );
};

export default CostumesSection;
