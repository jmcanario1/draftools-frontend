import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DraftoolsLogo from "../../../assets/draftools.png";
import Button from "../Button";
import { Bar, LogoAndNav, LogoImage, Nav, TopbarContainer } from "./styles";

const Topbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TopbarContainer>
      <Bar>
        <LogoAndNav>
          <LogoImage src={DraftoolsLogo} alt="Draftools Logo" />
          <Nav>
            <Button 
              text="Jogadores"
              background={location.pathname === "/players" ? "#ed6626" : "transparent"}
              onClick={() => navigate("/players")}
            />
            <Button
              text="Times"
              background={location.pathname === "/teams" ? "#ed6626" : "transparent"}
              onClick={() => navigate("/teams")}
            />
            <Button
              text="Draft"
              background={location.pathname === "/draft" ? "#ed6626" : "transparent"}
              onClick={() => navigate("/draft")}
            />
          </Nav>
        </LogoAndNav>
        <Button
          text="Dados do Campeonato"
          background="#ed6626"
          onClick={() => console.log("Implementar dados do campeonato.")}
        />
      </Bar>
    </TopbarContainer>
  );
};

export default Topbar;