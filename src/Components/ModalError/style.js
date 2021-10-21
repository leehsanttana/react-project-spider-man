import styled from "styled-components";

export const Section = styled.section`
  position: absolute;
  width: auto;
  height: 90%;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #e4e4e4;
  border-radius: 4px;
  padding: 2em;
  animation: showMessage 1s forwards ease-in-out;

  @keyframes showMessage {
    from {
      opacity: 0;
      transform: translateY(-60px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    margin-bottom: 1em;
  }
`;
