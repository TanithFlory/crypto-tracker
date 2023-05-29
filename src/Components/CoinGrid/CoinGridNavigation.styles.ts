import { styled } from "styled-components";

const SCoinGridNavigation = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    background-color: transparent;
    color: var(--clr-white);
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
    & > a {
      width: 32px;
    }
  }
`;

export default SCoinGridNavigation;
