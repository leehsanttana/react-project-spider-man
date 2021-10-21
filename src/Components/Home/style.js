import styled from "styled-components";
import wallpaper from "../../images/wallpaper.jpg";

export const Home = styled.section`
  padding: 0 80px 60px;
  background: linear-gradient(45deg, rgba(5, 5, 21, 0.8), rgba(2, 2, 9, 0.8)),
    url(${wallpaper}), no-repeat;
  background-size: cover;
  background-position: left, top;
  height: 100vh;
  color: #fff;
  display: grid;
  grid-template-columns: minmax(300px, 600px) 1fr;
  grid-template-rows: 150px auto;
  justify-content: space-between;
  grid-gap: 40px;
  row-gap: 200px;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(300px, 800px) 1fr;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 40px;
  }
`;

export const Logo = styled.section`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Container = styled.section`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5em;
    font-weight: 600;
    margin-bottom: 1em;
    align-self: start;
  }

  h2 {
    font-weight: 200;
  }

  @media (max-width: 380px) {
    align-self: start;
  }
`;
