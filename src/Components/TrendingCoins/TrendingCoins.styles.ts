import { styled } from "styled-components";
import { Link } from "react-router-dom";
interface IProps {
  color?: string;
}

export const STrendingCoins = styled.div`

  overflow: hidden;
  background-color: var(--clr-purple);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  border-radius: 12px;
  img {
    width: 80px;
    aspect-ratio: 1/1;
    object-fit: contain;
  }

  h3 {
    margin: 0;
    align-self: center;
  }
`;

export const STrendingAnchor = styled(Link)<IProps>`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  text-decoration: none;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  color: var(--clr-text2);
  border: 1px solid transparent;
  border-radius: 8px;
  position: relative;

  overflow: hidden;
  &:hover {
    border: 1px solid var(--clr-hover);
  }
  & > div:first-child {
    font-size: var(--fs-custom);
    color: ${(props) => props.color};
  }
  &::after {
    content: "";
    font-size: var(--fs-custom);
    height: 100%;
    width: 15px;
    margin-right: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.color};
  }
`;
