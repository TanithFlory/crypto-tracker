import { styled } from "styled-components";

export const SFooter = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 2rem auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  position: relative;
  padding: 2rem 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 0;
    }
    ul {
      padding: 0;
      list-style: none;
      color: var(--clr-text2a);
      li {
        cursor: pointer;
        padding: 5px;
        &:hover {
          color: var(--clr-text3);
        }
      }
    }
  }
`;

export const SFooterTradeMark = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 2rem;
  h3 {
    margin: 0;
  }
  span {
    cursor: pointer;
    &:hover {
      color: var(--clr-text3);
    }
  }
`;
