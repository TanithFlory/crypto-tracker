import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const SSocials = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 16px;
  h1,
  h3,
  p {
    margin: 0;
  }
  & > div:first-child {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1 {
      font-size: var(--fs-xxl);
    }
    p {
      font-size: var(--fs-m);
    }
  }
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(clamp(250px, 35%, 350px), 1fr)
    );
    gap: 2rem;
    & > a:first-child {
      margin-top: 2rem;
      grid-column: 1/-1;
      min-height: 100px;
      max-height: 100px;
      background-color: #4257d1;
      position: relative;
      overflow: hidden;
      & > div {
        display: flex;
        gap: 3rem;
        align-items: center;
        color: var(--clr-white);
        z-index: 10;
        svg {
          fill: var(--clr-white);
        }
      }
      & > svg {
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        transform: scale(2);
      }
      & > :last-child {
        transform: scale(1.5);
        width: auto;
        bottom: -15px;
        right: 0;
        left: auto;
      }
      &:hover {
        & > :last-child {
          transform: scale(1.6);
        }
      }
    }
    & > :last-child {
      grid-column: 1/-1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      div {
        position: relative;
        width: 100%;
        max-width: 350px;
        margin-top: 1rem;
        input,
        input:focus {
          outline: none;
          border: none;
          height: 40px;
          width: 100%;
          border-radius: 3px;
          padding-left: 15px;
          box-sizing: border-box;
        }
        button {
          position: absolute;
          right: 15px;
          top: 6px;
          height: 30px;
          width: 80px;
          background-color: var(--clr-blue);
          border: none;
          border-radius: 3px;
          color: var(--clr-white);
        }
      }
    }
  }
`;

export const SSocialAnchor = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3rem;
  background: var(--clr-white);
  padding: 20px 40px;
  border-radius: 18px;
  text-decoration: none;
  color: var(--clr-black);
  min-height: 70px;
  svg {
    transform: scale(2.5);
    fill: ${(props) =>
      props.color?.includes("linear") ? "var(--clr-purple)" : props.color};
  }
  &:hover {
    background: ${(props) => props.color};
    svg {
      fill: var(--clr-white);
    }
  }
`;
