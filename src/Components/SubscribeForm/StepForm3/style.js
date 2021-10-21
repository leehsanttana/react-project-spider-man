import styled from "styled-components";

export const Section = styled.section`
  animation: showIn 0.5s forwards;

  @keyframes showIn {
    from {
      opacity: 0;
      transform: translateY(60px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h1 {
    color: #29a329;
    font-size: 2em;
    font-weight: 600;
    align-self: start;
  }

  small {
    font-weight: 200;
  }
`;

export const Message = styled.div`
  margin-top: 100px;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 1em;
  }

  span {
    font-weight: 600;
    color: #eb161e;
  }

  h2 {
    padding: 1em 0;
    text-align: center;
  }
`;
