import styled from '@emotion/styled';

export const UserLogoWrapper = styled.div`
  position: relative;  
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 375px){
    
  }
  @media screen and (min-width: 335px) and (max-width: 768px) {
    margin-left: auto;
    margin-right: 14px;
  }
  @media screen and (max-width: 1279px) {
    margin-left: auto;
    margin-right: 24px;
  }
`;

export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  padding: 0;
  text-align: center;
  background-color: transparent;
  text-decoration: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.29;
  font-style: normal;
  font-weight: 500;
  transition: transform var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const UserLogoImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 38px;
  width: 38px;
`;

export const UserLogoText = styled.p`
  max-width: 110px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--white-color);
`;
