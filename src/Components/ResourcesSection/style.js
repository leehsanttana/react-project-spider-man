import styled from "styled-components";

export const ResourcesSection = styled.section`
  padding: 80px;
  background: #fff;
  color: #060813;

  h2::after {
    border-color: transparent transparent transparent #060813;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  text-align: center;

  h3 {
    font-size: 1.5em;
    margin: 1em 0;
  }
`;
