import styled from "styled-components";
import marca from "../../images/marca.png";

export const AboutSection = styled.section`
  padding: 80px;
  background: linear-gradient(45deg, rgba(2, 2, 9), rgba(5, 5, 21));
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 20px;
    grid-template-columns: 1fr;
  }
`;

export const ImageBg = styled.section`
  width: 500px;
  height: 500px;
  background: url(${marca}) no-repeat;
  background-size: cover;
  position: absolute;
  top: 10px;
  left: -40px;
  z-index: 1;
  opacity: 0.2;
  animation: glicth 2.5s alternate infinite;

  @media (max-width: 380px) {
    width: 300px;
    height: 300px;
  }

  @keyframes glicth {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.2;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 0.1;
    }
  }
`;

export const Info = styled.section`
  color: #fff;
  z-index: 10;
  p {
    font-size: 1.2em;
    margin-bottom: 1.5em;
  }
`;

export const Image = styled.section`
  z-index: 10;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    animation: moveSpider 4s alternate infinite;
  }

  @keyframes moveSpider {
    0% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(5px, -10px);
    }

    100% {
      transform: translate(20px, -10px);
      transform: scale(1.02);
    }
  }
`;

export const Button = styled.a`
  margin-top: 1.5em;
  font-size: 1.4em;
  padding: 0.5em;
  background: #eb161e;
  border: 3px solid #eb161e;
  cursor: pointer;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;

  &:hover {
    border: 3px solid #fff;
    background: #eb161e;
  }
`;
