import styled from "styled-components";

export const Header = styled.header`
  grid-column: 1 / 3;
  display: flex;
  align-self: center;
  justify-content: space-between;

  button {
    display: none;
  }

  img {
    width: 70px;
    height: 70px;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li a {
    font-size: 1.2em;
    font-weight: 600;
    padding: 1em;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #eb161e;
    }
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;

    button {
      align-self: center;
      padding: 0.5em;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      background: transparent;
      border: 2px solid #eb161e;
      height: 30px;
      cursor: pointer;

      div {
        margin: 0;
        margin-bottom: 0.3em;
        width: 20px;
        height: 2px;
        background: #eb161e;
      }
    }

    ul {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 120px;
      right: -100%;
      width: 100%;
      max-width: 0;
      transition: 1s ease;
      background: #020208;

      li {
        text-align: center;
        padding: 2em 1em;
      }

      &.active {
        max-width: 100%;
        right: 0;
      }
    }
  }
`;
