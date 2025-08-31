import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 96px 24px 96px;
  background-color: #0b2e44;
  color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  `;

export const LogoAndNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;
`

export const LogoImage = styled.img`
  height: 48px;
`;

export const Nav = styled.nav`
  height: 75%;
  display: flex;
  gap: 16px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;