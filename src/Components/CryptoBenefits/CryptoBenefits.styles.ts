import styled from "styled-components";

const SCryptoBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--clr-background);
  & > div {
    display: flex;
    gap: 3rem;
    max-width: 1100px;
    margin-bottom: 3rem;
    svg {
      width: 500px;
    }
    h1 {
      font-size: var(--fs-xxl);
      background-image: var(--clr-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      align-self:center;
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
`;

export default SCryptoBenefits;
