import styled from "styled-components";

const SSearch = styled.div`
  background-color: var(--clr-text2);
  min-height: 400px;
  width: 500px;
  padding: 15px;
  border-radius: 5px;
  & > div:first-child {
    position: relative;
    & > svg {
      fill: var(--clr-primary);
      transform: scale(1.4);
      position: absolute;
      top: 16px;
      left: 8px;
    }
    div {
      svg {
        position: absolute;
        color: var(--clr-primary);
        transform: scale(2);
        right: 12px;
        top: 17px;
      }
    }
    input,
    input:focus {
      outline: 0;
      border: 0;
    }
    input {
      background-color: var(--clr-text2);
      width: 100%;
      box-sizing: border-box;
      height: 50px;
      color: var(--clr-black);
      font-size: var(--fs-s);
      padding-inline: 35px;
    }
  }

  div:last-child {
    color: var(--clr-primary);
    font-weight: 700;
    padding: 5px;
    svg {
      fill: orange;
      transform: scale(2);
      padding-left: 5px;
    }
    & > div {
      display: flex;
      margin-bottom: 10px;
      h3 {
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    padding: 3px;
    input,
    input::placeholder {
      font-size: calc(var(--fs-s) - 0.2rem);
    }
  }
`;

export default SSearch;
