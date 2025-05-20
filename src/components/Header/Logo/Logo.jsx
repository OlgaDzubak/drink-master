import { LogoLink, LogoSVG, LogoText } from './Logo.styled';

export const Logo = ({location}) => {
  return (
    <LogoLink to="/" location={location} aria-label="site logo">
      <LogoSVG />
      <LogoText>Drink Master</LogoText>
    </LogoLink>
  );
};
