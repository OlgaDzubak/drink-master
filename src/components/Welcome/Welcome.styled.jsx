import styled from '@emotion/styled';

import welcomeMobile_1x from '../../assets/images/welcomePage/welcome-background-mobile@1x.jpg'
import welcomeMobile_2x from '../../assets/images/welcomePage/welcome-background-mobile@2x.jpg'
import welcomeMobile_3x from '../../assets/images/welcomePage/welcome-background-mobile@3x.jpg'
import welcomeTablet_1x from '../../assets/images/welcomePage/welcome-background-tablet@1x.jpg'
import welcomeTablet_2x from '../../assets/images/welcomePage/welcome-background-tablet@2x.jpg'
import welcomeTablet_3x from '../../assets/images/welcomePage/welcome-background-tablet@3x.jpg'
import welcomeDesktop_1x from '../../assets/images/welcomePage/welcome-background-desktop@1x.jpg'
import welcomeDesktop_2x from '../../assets/images/welcomePage/welcome-background-desktop@2x.jpg'
import welcomeDesktop_3x from '../../assets/images/welcomePage/welcome-background-desktop@3x.jpg'

export const StyledMain = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;

  //mobile
  @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.98px),
        screen and (min-resolution : 96dpi) and (max-width: 767.98px),
        screen and (min-resolution : 1dppx) and (max-width: 767.98px){
    background-image: url(${welcomeMobile_1x});
  }
  
  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767.98px),
         screen and (min-resolution : 192dpi) and (max-width: 767.98px),
         screen and (min-resolution : 2dppx) and (max-width: 767.98px){
    background-image: url(${welcomeMobile_2x});
  }

  @media screen and (min-device-pixel-ratio: 3) and (max-width: 767.98px),
         screen and (min-resolution : 288dpi) and (max-width: 767.98px),
         screen and (min-resolution : 3dppx) and (max-width: 767.98px),{
    background-image: url(${welcomeMobile_3x});
  }


  //tablet
  @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1439.98px),
        screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1439.98px),
        screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1439.98px){
    background-image: url(${welcomeTablet_1x});
  }
  
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px) and (max-width: 1439.98px),
         screen and (min-resolution : 192dpi) and (min-width: 768px) and (max-width: 1439.98px),
         screen and (min-resolution : 2dppx) and (min-width: 768px) and (max-width: 1439.98px){
    background-image: url(${welcomeTablet_2x});
  }

  @media screen and (min-device-pixel-ratio: 3) and  (min-width: 768px) and (max-width: 1439.98px),
         screen and (min-resolution : 288dpi) and  (min-width: 768px) and (max-width: 1439.98px),
         screen and (min-resolution : 3dppx) and  (min-width: 768px) and (max-width: 1439.98px){
    background-image: url(${welcomeTablet_3x});
  }


    //desktop
  @media screen and (min-device-pixel-ratio: 1) and (min-width: 1440px),
        screen and (min-resolution : 96dpi) and (min-width: 1440px),
        screen and (min-resolution : 1dppx) and (min-width: 1440px),{
    background-image: url(${welcomeDesktop_1x});
  }
  
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
         screen and (min-resolution : 192dpi) and (min-width: 1440px),
         screen and (min-resolution : 2dppx) and (min-width: 1440px),{
    background-image: url(${welcomeDesktop_2x});
  }

  @media screen and (min-device-pixel-ratio: 3) and (min-width: 1440px),
         screen and (min-resolution : 288dpi) and (min-width: 1440px),
         screen and (min-resolution : 3dppx) and (min-width: 1440px){
    background-image: url(${welcomeDesktop_3x});
  }


`;

export const StyledWelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  letter-spacing: -0.02em;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  z-index: 3;

  @media screen and (min-width: 375px) {
   width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 610px;
    padding-left: 120px;
    margin-left: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 625px;  
  }
`;
export const StyledTitle = styled.h1`
  font-feature-settings: 'liga' off;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-bottom: 14px;
  text-align: center;
  color: var(--welcomepagetext-color);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    text-align: left;
  }
`;
export const StyledText = styled.p`
  font-size: 14px;
  line-height: 1.29;
  
  margin-bottom: 40px;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  color: var(--welcomepagetext-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    text-align: left;
    padding: 0;
  }
`;


export const StyledButtonBox = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;
export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 46px;
  gap: 10px;
  border-radius: 42px;
  background-color: transparent;
  border: 1px solid var(--whitetwenty-color);
  color: var(--white-color);
  transition: background-color var(--transition), color var(--transition), transform var(--transition);
 
  &:hover,
  &:focus {
    background-color: var(--white-color);
    color: var(--blue-color);
    transform: scale(1.05);
  }
  

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 54px;
    gap: 14px;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  z-index: 5;
`;