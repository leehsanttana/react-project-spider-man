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
    color: #060813;
    font-size: 2em;
    font-weight: 600;
    align-self: start;
  }

  small {
    font-weight: 200;
  }
`;

export const Value = styled.div`
  padding-top: 2em;

  label {
    display: block;
    font-size: 1.2em;
  }

  input {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    padding: 1.5em 1em;
    margin-bottom: 2em;
    border: 2px solid #b3b3b3;
    border-radius: 2px;

    &:focus {
      border: 2px solid #060813;
    }
  }
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;

  .btn-back {
    font-size: 1.4em;
    background: #a7a7a7;
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
  }

  button {
    background: #29a329;

    &:hover {
      filter: brightness(80%);
    }
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }
`;
