import styled from "styled-components";

export const Subscribe = styled.section`
  padding: 80px;
  background: #fff;
  color: #060813;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  h2::after {
    border-color: #060813 transparent #060813 transparent;
    margin: 0 auto;
  }

  a {
    margin-top: 1.5em;
    font-size: 1.8em;
    background: #eb161e;
    color: #fff;
    display: inline-block;
    padding: 0.5em 1.5em;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
