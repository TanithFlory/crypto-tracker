import { styled } from "styled-components";

const SAboutCoin = styled.div`
  overflow-y: auto;
  background-color: var(--clr-purple);
  border-radius: 12px;
  max-height: 438px;
  max-width: 550px;
  padding: 2rem;
  grid-row: 1;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 3px;
  }
  h1,
  h4,
  p {
    margin: 0;
  }
  & > :first-child {
    display: flex;
    justify-content: center;

    & > h1 {
      margin-bottom: 1rem;
      background-image: var(--clr-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      align-self: center;
    }
  }
  & > :nth-child(2) {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    img {
      height: 80px;
      aspect-ratio: 1/1;
    }
  }
  p {
    color: var(--clr-text3);
  }
  a {
    color: var(--clr-text2);
  }
`;

export default SAboutCoin;
