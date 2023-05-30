import styled from "styled-components";

const SCryptoBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--clr-background);
  & > div {
    display: flex;
    justify-content: center;
    gap: 3rem;
    max-width: 1100px;
    margin-bottom: 3rem;
    svg {
      width: 500px;
    }
    h1 {
      font-size: var(--fs-xxl);
      margin: 0;
      align-self: center;
    }
    p {
      text-align: center;
      font-size: var(--fs-m);
    }
  }
  .crypto-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 1023px) {
    & > div {
      flex-wrap: wrap;
      max-width: 500px;
      p {
        margin-bottom: 0;
        padding: 10px;
      }
      &::after {
        content: "";
        width: 100vw;
        height: 6px;
        background-color: white;
      }
    }
  }
  @media screen and (max-width: 500px) {
    & > div {
      svg {
        width: 270px;
      }
    }
  }
`;

export default SCryptoBenefits;
