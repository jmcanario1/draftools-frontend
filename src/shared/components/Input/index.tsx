import React from "react";
import { Field, InputContainer, Label, LabelContainer } from "./styles";

interface InputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({ label, required=false, placeholder, width="150px" }) => {
  return (
    <InputContainer width={width}>
      <LabelContainer>
        <Label>{label}{required && "*"}</Label>
      </LabelContainer>
      <Field placeholder={placeholder}/>
    </InputContainer>
  )
}

export default Input;