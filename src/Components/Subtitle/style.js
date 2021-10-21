import styled from "styled-components";

export const Subtitle = styled.h2`
  font-size: 2em;
  margin-bottom: 1em;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    border-width: 1px 160px 1px;
  }
`;
