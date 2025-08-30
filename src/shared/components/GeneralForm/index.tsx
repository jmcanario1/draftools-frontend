import React, { ReactNode } from "react";
import { Card, Content, Title } from "./styles";

interface FormCardProps {
  title?: string;
  children: ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ title, children }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      <Content>{children}</Content>
    </Card>
  );
};

export default FormCard;