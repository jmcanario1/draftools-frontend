import { StyledButton } from "./styles";

interface ButtonProps {
  color?:string;
  background?: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ color = "#ffffff", background = "#ed6626", text, onClick }) => {
  return (
    <StyledButton
      color={color}
      background={background}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}

export default Button;