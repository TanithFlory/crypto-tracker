import { styled } from "styled-components";

const SCoinNews = styled.div`
  grid-column: 2 / span 2;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  max-height: 502px;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-purple);
  padding: 2rem 5rem;
  box-sizing: border-box;
  h1,
  h3,
  p {
    align-self: center;
    margin: 0;
    text-overflow: ellipsis;
  }
  a {
    color: var(--clr-text);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
    max-width: 750px;
  }
  img {
    width: 150px;
    aspect-ratio: 1/1;
    border-radius: 100%;
  }
`;

export default SCoinNews;
