import styled from '@emotion/styled';
import { ReactComponent as LogoImg } from '../../../assets/images/logo/logo_DM.svg';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: ${(props) => {
      if (props.location === "footer") return props.theme.footerLinkTextColor;
      return props.theme.navTextColor;
  }};
  fill: ${(props) => {
    if (props.location === "footer") return props.theme.footerLinkTextColor;
    return props.theme.navTextColor;
  }};
  transition: transform var(--transition), color var(--transition), fill var(--transition);

  &:hover, &:focus {
    transform: scale(1.1);
  }

`;
export const LogoText = styled.p`
  font-size: 16px;
  line-height: 1.125;
  font-weight: 600;
  color : currentColor;
  transition: color var(--transition);

`;
export const LogoSVG = styled(LogoImg)`
  width: 28px;
  height: 28px;
  fill: currentColor;
`;
