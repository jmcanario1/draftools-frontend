import styled from "styled-components";

export const StyledButton = styled.button<{ color: string; background: string }>`
  color: ${(props) => props.color ?? "#ffffff"};
  background: ${(props) => props.background ?? "#ed6626"};
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }
`;