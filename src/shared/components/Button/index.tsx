import { StyledButton } from "./styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  color?:string;
  background?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = "button", color = "#ffffff", background = "#ed6626", text, onClick }) => {
  return (
    <StyledButton
      type={type}
      color={color}
      background={background}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}

export default Button;