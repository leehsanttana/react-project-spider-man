import styled from "styled-components";

export const Footer = styled.footer`
  background: #020208;
  padding: 40px 80px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    color: #eb161e;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    justify-content: center;
    text-align: center;
    gap: 20px;

    div:last-child {
      order: 1;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 40px;
`;
