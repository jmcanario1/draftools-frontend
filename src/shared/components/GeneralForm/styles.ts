import styled from "styled-components";

export const FormContainer = styled.div`
  display: column;
  background-color: #ff0000ff;
  border-radius: 12px;
  width: 100%;
`

export const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.div`
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #333;
`

export const Icon = styled.img`
  margin: 8px;
  border-radius: 8px;
  background: green;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  background: gray;

  form {
    display: flex;
    gap: 8px;

    button {
      align-self: center;
    }
  }
`