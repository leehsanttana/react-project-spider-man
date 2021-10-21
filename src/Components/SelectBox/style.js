import styled from "styled-components";

export const Selected = styled.div`
  background: ${(props) => (props.selected ? "#eb161e" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#060813")};
  padding: 1em;
  border: 2px solid ${(props) => (props.selected ? "transparent" : "#060813")};
  margin-bottom: 1em;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #060813;
    color: #fff;
  }
`;
