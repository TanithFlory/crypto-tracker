import { styled } from "styled-components";

const SCoinLineGraph = styled.div`
  background-color: var(--clr-purple);
  padding: 1rem;
  border-radius: 16px;
  width: 100%;
  box-sizing: border-box;
  & > :first-child {
    display: flex;
    justify-content: center;
    h1 {
      align-self: center;
    }
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    & > :first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: var(--fs-l);
      }
      h3 {
        font-size: var(--fs-m);
      }
    }
  }
  .coin_24h-status {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  h1,
  h4,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    margin-bottom: 1rem;
  }

  h3,
  h4 {
    color: var(--clr-text1);
  }
  .dotted-lines-rect {
    fill: var(--clr-purple);
  }
  .x-dotted-line,
  .y-dotted-line {
    stroke: var(--clr-white);
    opacity: 0;
    stroke-dasharray: 3 3;
  }

  .graph-circle {
    stroke: var(--clr-white);
    stroke-width: 2;
    opacity: 0;
  }
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    -webkit-animation: pulse 1s alternate infinite;
    -moz-animation: pulse 1s alternate infinite;
  }
  .visible {
    opacity: 1;
  }
  /* 
  @-webkit-keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
        0px 0px 5px 2px rgba(0, 255, 135, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
        0px 0px 15px 2px rgba(0, 255, 135, 1);
    }
  }

  @-moz-keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
        0px 0px 5px 2px rgba(0, 255, 135, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(0, 255, 182, 0.5),
        0px 0px 15px 2px rgba(0, 255, 135, 1);
    }
  } */
  @media screen and (max-width: 400px) {
    & > :nth-child(2) {
      justify-content: center;
    }
    width: auto;
  }
`;

export default SCoinLineGraph;
