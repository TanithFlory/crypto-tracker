import { styled } from "styled-components";

const SCryptoDashboard = styled.div`
  background: var(--clr-background);
  display: grid;
  padding: 6rem 2rem 1rem;
  grid-template-columns: repeat(4, 1fr);
  place-content: end;
  place-items: start;
  gap: 2rem;

  .custom-scroll {
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
  }
  a {
    background-color: var(--clr-purple2);
  }
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5px;
    margin-top: 3rem;
    & > div {
      padding: 5px;
    }
  }
`;

export default SCryptoDashboard;
