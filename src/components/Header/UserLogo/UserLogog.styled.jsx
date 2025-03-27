import styled from '@emotion/styled';

export const UserLogoWrapper = styled.div`
  position: relative;  
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-right: 14px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`;
export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  border: none;
  background-color: transparent;
  transition: transform var(--transition);

  &:hover, &:focus {
    transform: scale(1.1);
  }
`;
export const UserLogoImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;
export const UserLogoText = styled.p`
  max-width: 110px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: ${(props) => props.theme.navTextColor};
  transition: color var(--transition);
`;
