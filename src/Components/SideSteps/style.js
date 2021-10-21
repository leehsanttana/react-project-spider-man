import styled from "styled-components";

export const Container = styled.section`
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 50px;
    position: relative;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 2em;
    h3 {
      display: none;
    }
  }
`;

export const Step = styled.div`
  background: ${(props) => (props.active ? "#eb161e" : "grey")};
  padding: 0.5em 1em;
  margin-right: 2em;
`;
