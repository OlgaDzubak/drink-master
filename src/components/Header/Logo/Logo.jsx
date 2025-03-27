import { LogoLink, LogoSVG, LogoText } from './Logo.styled';

export const Logo = ({location}) => {
  return (
    <LogoLink to="/" location={location}>
      <LogoSVG />
      <LogoText>Drink Master</LogoText>
    </LogoLink>
  );
};
