import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  background: linear-gradient(45deg, rgba(5, 5, 21), rgba(2, 2, 9));
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  .btn-back-menu {
    color: #fff;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    flex-direction: column;

    .btn-back-menu {
      color: #fff;
      margin-top: 1em;
      padding: 0.5em;
      position: static;
    }
  }
`;

export const Container = styled.div`
  width: 450px;
  height: 490px;
  padding: 30px;
  background: #e4e4e4;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;

export const Steps = styled.nav`
  margin-right: 2em;

  @media (max-width: 768px) {
    display: flex;
    align-self: flex-start;
  }
`;
