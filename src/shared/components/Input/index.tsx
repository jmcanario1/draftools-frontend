import React from "react";
import { InputContainer, Label, LabelContainer } from "./styles";

interface InputProps {
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({ label, required=false, name, placeholder, width="300px" }) => {
  return (
    <InputContainer>
      <LabelContainer>
        <Label>{label}</Label>
        {/* { required && (<RequiredTag/>)} */}
      </LabelContainer>
      <input placeholder="teste"></input>
      {/* <Field placeholder={placeholder}/> */}
    </InputContainer>
  )
}

export default Input;