import styled from "styled-components";
interface ButtonProps {
  gap?: number;
}
export const SLanguage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100px;
  height: 30px;
`;
export const SButton = styled.button<ButtonProps>`
  cursor: pointer;
  width: 65px;
  overflow: hidden;
  background-color: transparent;
  color: var(--clr-text2);
  display: flex;
  align-items: center;
  display: ${(props) => props.className?.includes("inactive") && "none"};
  border: none;
  gap: 5px;
  font-weight: 700;
  position: absolute;
  top: ${(props): string => `${props.gap}px`};
  border-radius: 5px;
  img {
    width: 30px;
  }
  &:hover {
    border: 2px solid var(--clr-secondary);
  }
`;
