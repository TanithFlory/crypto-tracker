import styled from "styled-components";

const SNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 100vw;
  height: 100px;
  gap: 10rem;
  z-index: 9999;
  ul {
    font-weight: 700;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1.5rem;
    padding: 0;
    & > div {
      margin-left: 2rem;
    }
    a {
      text-decoration: none;
      color: var(--clr-text1);
      &:hover {
        color: var(--clr-text2);
      }
    }
  }
`;

export default SNavbar;
