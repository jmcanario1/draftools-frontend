import styled from "styled-components";

export interface InputContainerProps {
  width?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  flex: 1 1 ${({ width }) => width || "150px"};
  min-width: ${({ width }) => width || "150px"};
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #0b2e44;
  margin-bottom: 4px;
`;

export const Field = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  padding: 6px 10px;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #0b2e44;
    box-shadow: 0 0 0 2px rgba(11, 46, 68, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;
