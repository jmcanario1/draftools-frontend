import React, { ReactNode } from "react";
import DraftoolsLogo from "../../../assets/draftools.png";
import { Content, FormContainer, Icon, IconAndTitle, Title } from "./styles";

interface FormCardProps {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
}

const GeneralForm: React.FC<FormCardProps> = ({ icon, title, children }) => {
  return (
    <FormContainer>
      <IconAndTitle>
        {icon && <Icon src={DraftoolsLogo} alt="DrafTools" width={72} height={72}/>}
        {title && <Title>{title}</Title>}
      </IconAndTitle>
      <Content>{children}</Content>
    </FormContainer>
  );
};

export default GeneralForm;