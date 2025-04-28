import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.nav`
  position : relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 200;
  
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    height: 100%;
  }
  @media screen and (max-width: 1279px) and (max-height: 460px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  display: block;
  height: 36px;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  text-decoration: none;
  border-radius: 40px;
  color : ${(props) => props.theme.navTextColor};
  border: 1px solid ${(props) => props.theme.navBorderColor};
  background-color: ${(props) => props.theme.navBackgroundColor};
  transition: color var(--transition), background-color var(--transition), border-color var(--transition); 

  &:hover, &:focus, &.active {
    color : ${(props) => props.theme.navTextColorHover};
    background-color: ${(props) => props.theme.navBackgroundColorHover};
  }
`;
