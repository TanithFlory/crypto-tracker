import { styled } from "styled-components";

const SCoinGridNavigation = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: transparent;
    color: var(--clr-white);
    outline: none;
    border: none;
    cursor: pointer;
  }
  svg {
    fill: var(--clr-white);
    height: 100%;
    width: 100%;
    min-width: 36px;
    &:hover {
      fill: var(--clr-hover);
    }
  }
  span {
    color: var(--clr-white);
  }
  :last-child {
    display: flex;
    gap: 1rem;
    & > button {
      width: 32px;
    }
  }
`;

export default SCoinGridNavigation;
