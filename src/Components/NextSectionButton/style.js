import styled from "styled-components";

export const Button = styled.div`
  a {
    margin-top: 1.5em;
    font-size: 1.8em;
    background: transparent;
    width: 70px;
    height: 70px;
    border: 3px solid #eb161e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s ease;
    text-decoration: none;

    @keyframes moveInDown {
      to {
        transform: translateY(8px);
      }
    }

    &:hover {
      border: 3px solid #fff;
      background: #eb161e;
    }
    p {
      color: #fff;
      transform: translateY(0);
      animation: moveInDown 0.6s alternate infinite;
    }
  }
`;
