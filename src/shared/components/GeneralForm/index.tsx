import React, { ReactNode } from "react";
import DraftoolsLogo from "../../../assets/draftools.png";
import {
  Content,
  FormContainer,
  Icon,
  IconAndTitle,
  Title
} from "./styles";

interface GeneralFormProps {
  icon?: string | ReactNode;
  title?: string;
  children: ReactNode;
}

const GeneralForm: React.FC<GeneralFormProps> = ({ icon, title, children }) => {
  const renderIcon = () => {
    if (typeof icon === "string") {
      return <Icon src={icon} alt="Form icon" width={72} height={72} />;
    }
    if (icon) return icon;
    return <Icon src={DraftoolsLogo} alt="Default Draftools logo" width={72} height={72} />;
  };

  return (
    <FormContainer>
      {(icon || title) && (
        <IconAndTitle>
          {renderIcon()}
          {title && <Title>{title}</Title>}
        </IconAndTitle>
      )}
      <Content>{children}</Content>
    </FormContainer>
  );
};

export default GeneralForm;
