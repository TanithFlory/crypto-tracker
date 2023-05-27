import { styled } from "styled-components";

const SCoinNews = styled.div`
  grid-column: 2 / span 2;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  max-height: 502px;
  background-color: var(--clr-purple);
  border-radius: 12px;
  & > div:first-child {
    display: flex;
    flex-direction: column;
  }
  & > div:nth-child(2) {
    display: grid;
    justify-content: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    padding-inline: 2rem;
  }
  h1,
  h3,
  p {
    align-self: center;
    text-align: center;
    margin: 0;
    text-overflow: ellipsis;
  }
  h3 {
    color: var(--clr-text2);
  }
  a {
    color: var(--clr-text3);
    text-decoration: none;
    display: grid;
    grid-template-rows: 1fr 40%;
    margin: 1rem 0;
    border: 3px solid transparent;
    border-bottom: 3px solid var(--clr-hover);
    div:first-child {
      position: relative;
      svg {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 10px;
      position: relative;
      bottom: 30px;
    }
    &:hover {
      border-radius: 8px;
      border: 3px solid var(--clr-hover);
    }
  }
  img {
    width: 100%;
    max-height: 250px;
    min-height: 250px;
    border-radius: 8px;
  }
`;

export default SCoinNews;
