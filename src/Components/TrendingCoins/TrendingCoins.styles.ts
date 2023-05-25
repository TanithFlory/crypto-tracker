import { styled } from "styled-components";

const STrendingCoins = styled.div`
  grid-row: 1;
  grid-column: 4;
  max-height: 502px;
  overflow-y: scroll;
  background-color: var(--clr-purple);
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    width: 80px;
    aspect-ratio: 1/1;
  }
  a {
    display: flex;
    align-self: center;
    gap: 1rem;
    text-decoration: none;
    padding: 10px;
    margin-bottom: 1rem;
    color: var(--clr-text1);
    border: 1px solid transparent;
    border-radius: 8px;
    &:hover {
      border: 1px solid var(--clr-hover);
    }
  }
  h3 {
    margin: 0;
    align-self: center;
  }

  span {
    color: var(--clr-text2);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default STrendingCoins;
