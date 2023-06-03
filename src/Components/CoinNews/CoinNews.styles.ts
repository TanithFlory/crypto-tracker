import { styled } from "styled-components";

const SCoinNews = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 502px;
  min-height: 502px;
  background-color: var(--clr-purple);
  border-radius: 12px;
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    & > span {
      height: 28px;
      width: 28px;
      position: relative;

      svg {
        height: 100%;
        width: 100%;
      }
      &:hover::after {
        content: "Articles may be irrelevant.";
        white-space: pre;
        padding: 5px;
        border-radius: 5px;
        width: 200px;
        position: absolute;
        background-color: var(--clr-text2);
        color: var(--clr-text1);
        font-weight: 700;
        right: -50px;
        top: 0px;
      }
    }
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
