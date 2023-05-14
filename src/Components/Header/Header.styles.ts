import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  div:first-child {
    text-align: center;
    margin-top: 3rem;
    h1 {
      margin: 0;
      font-size: var(--fs-custom);
      line-height: 4rem;
    }
    span {
      background: var(--clr-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      font-size: var(--fs-l);
    }
  }
  & > div:nth-child(2) {
    width: 100%;
    max-width: 450px;
    & > div {
      position: relative;
      background: var(--clr-gradient);
      border-radius: 26px;
      padding: 3px;
      input {
        width: 100%;
        box-sizing: border-box;
        height: 45px;
        border-radius: 26px;
        padding-inline: 32px;
        background-color: black;
        text-overflow: ellipsis;
        color: var(--clr-secondary);
      }
      input::placeholder {
        color: var(--clr-text1);
      }
      input,
      input:focus {
        outline: none;
        border: none;
      }
      button {
        position: absolute;
        right: 18px;
        background-color: transparent;
        border: none;
        top: 16px;
        cursor: pointer;
        svg {
          transform: scale(2);
          fill: var(--clr-secondary);
        }
      }
    }
    & > button {
      margin: 3rem auto 0;
      width: 150px;
      height: 45px;
      border-radius: 26px;
      background-color: var(--clr-primary);
      border: 3px solid var(--clr-secondary);
      color: var(--clr-white);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      &:hover {
        background-color: var(--clr-secondary);
      }
    }
  }
`;

export default SHeader;
