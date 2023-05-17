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
      font-size: var(--fs-m);
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
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 55px;
      padding-inline: 5px;
      border-radius: 5px;
      cursor: pointer;
      & > div {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          height: 30px;
          aspect-ratio: 1/1;
        }
      }
      &:hover {
        background-color: var(--clr-hover);
      }
      h4 {
        color: var(--clr-black);
        margin: 0;
      }
    }
  }
`;

export default SSearch;
