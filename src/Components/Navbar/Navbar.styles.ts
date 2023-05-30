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
  background: var(--clr-background-opaque);
  & > button {
    display: none;
    position: absolute;
    right: 25px;
    top: 20px;
    background-color: transparent;
    width: 50px;
    height: 60px;
    box-sizing: content-box;
    z-index: 9999;
    border: none;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    font-weight: 700;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1.5rem;
    padding: 0;
    li {
      color: var(--clr-text1);
      &:hover {
        color: var(--clr-text2);
      }
    }
    & > div {
      margin-left: 2rem;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1023px) {
    background: transparent;
    justify-content: flex-start;
    h1 {
      margin-left: 4rem;
    }
    & > button {
      display: block;
    }
    ul {
      flex-direction: column;
      position: absolute;
      top: 0px;
      right: 0px;
      width: 100%;
      max-width: 250px;
      background: var(--clr-background-opaque);
      padding-top: 6rem;
      margin: 0;
      height: 100vh;
      transition: 0.5s all ease-in;
      transform: translateX(100%);
      li {
        border: 3px solid var(--clr-text2);
        padding: 10px 2rem;
        border-radius: 12px;
        transition: 0.3s all ease-in-out;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
          color: var(--clr-text2a);
        }
      }
    }
    .animate {
      animation: slideInFromRight 0.5s ease-in-out;
      transform: translateX(0);
    }
  }
`;

export default SNavbar;
