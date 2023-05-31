import { styled } from "styled-components";

const SCoinGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  color: var(--clr-text1);
  h2 {
    margin: 10px 0;
    width: 100%;
  }
  & > a {
    text-decoration: none;
    background-color: var(--clr-text2);
    min-height: 275px;
    border-radius: 6px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      padding: 5px;
      gap: 5px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      div:first-child {
        position: absolute;
        color: var(--clr-black);
        background-color: rgba(185, 203, 227, 0.5);
        top: 5px;
        left: 5px;
        font-size: var(--fs-s);
        width: 50px;
        height: 25px;
        border-radius: 6px;
        padding: 5px;
        text-align: center;
        font-weight: 700;
        display: flex;
        align-items: center;
        svg {
          width: 100%;
          height: 100%;
          animation: spin 10s linear infinite;
        }
      }
    }
    span {
      color: var(--clr-black);
      span {
        font-weight: 700;
        color: var(--clr-green);
      }
    }
    &:hover {
      background-color: var(--clr-text2a);
    }
  }

  img {
    width: 100px;
    height: 100px;
    animation: rotate 10s linear infinite;
    transform-origin: center center;
  }
  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export default SCoinGrid;
