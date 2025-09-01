import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.colors?.background || "#fff"};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin-left: 8px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.textPrimary || "#333"};
`;

export const Icon = styled.img`
  margin: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme?.colors?.primary || "green"};
`;

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme?.colors?.surface || "#f9f9f9"};
  border-radius: 8px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  button {
    width: 100%;
    align-self: center;
  }
`;

export const FormRow = styled.div<{ gap?: string; justify?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap || "16px"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  width: 100%;
`;
