import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.4em;
  background: #eb161e;
  border: none;
  color: #fff;
  display: inline-block;
  padding: 0.5em 1.5em;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    filter: brightness(80%);
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
