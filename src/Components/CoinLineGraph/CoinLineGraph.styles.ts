import { styled } from "styled-components";

const SCoinLineGraph = styled.div`
  grid-column: 1 / span 3;
  background-color: var(--clr-purple);
  padding: 2rem;
  border-radius: 16px;
  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .coin_24h-status {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
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
  .visible {
    opacity: 1;
  }
`;

export default SCoinLineGraph;
