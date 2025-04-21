import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import glass_dark_mob_1x from '../../assets/images/home/glass_dark_mob@1x.jpg';
import glass_dark_mob_2x from '../../assets/images/home/glass_dark_mob@2x.jpg';
import glass_dark_mob_3x from '../../assets/images/home/glass_dark_mob@3x.jpg';
import glass_dark_tab_1x from '../../assets/images/home/glass_dark_tab@1x.jpg';
import glass_dark_tab_2x from '../../assets/images/home/glass_dark_tab@2x.jpg';
import glass_dark_tab_3x from '../../assets/images/home/glass_dark_tab@3x.jpg';

import glass_light_mob_1x from '../../assets/images/home/glass_light_mob@1x.jpg';
import glass_light_mob_2x from '../../assets/images/home/glass_light_mob@2x.jpg';
import glass_light_mob_3x from '../../assets/images/home/glass_light_mob@3x.jpg';
import glass_light_tab_1x from '../../assets/images/home/glass_light_tab@1x.jpg';
import glass_light_tab_2x from '../../assets/images/home/glass_light_tab@2x.jpg';
import glass_light_tab_3x from '../../assets/images/home/glass_light_tab@3x.jpg';

//Hero---------------------------------------
export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 112px;

  }

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    padding-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    padding-top: 56px;
    padding-bottom: 110px;
  }
`;

export const HeroTextDiv = styled.div`
  @media screen and (max-width: 767.9px) {
    margin-bottom: 45px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439.9px){
    margin-bottom: 55px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 130px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: 0;
  margin-bottom: 16px;
  color: ${(props) => props.theme.mainTextColor};
  transition: color var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
    font-size: 64px;
    line-height: 1.06;
    margin-bottom: 28px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 32px;
  color: ${(props) => props.theme.mainTextColor};
  transition: color var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    margin-bottom: 40px;
  }
`;

export const BtnAddDrinks = styled(Link)`
  display: inline-block;
  padding: 18px 44px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;  
  border-radius: 42px;
  background-color: ${(props) => props.theme.backGroundBtnColor};
  color: ${(props) => props.theme.mainBackground};
  border: 2px solid ${(props) => props.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border-color var(--transition);

  &:hover, &:focus {
    border-color: ${(props) => props.theme.borderBtnColorHover};
    background-color: ${(props) => props.theme.backGroundBtnColorHover};
    color: ${(props) => props.theme.mainBackground};
  }

  &:active{
    border-color: ${(props) => props.theme.backGroundBtnColorActive};
    background-color: ${(props) => props.theme.backGroundBtnColorActive};
    color: ${(props) => props.theme.btnColorActive};
  }

  @media screen and (min-width: 1280px) {
    padding: 18px 44px;
  }

`;

export const GlassPictureDiv = styled.div`
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 767.9px) {
    width: 252px;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }


  @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.9px),
          screen and (min-resolution : 96dpi) and (max-width: 767.9px),
          screen and (min-resolution : 1dppx) and (max-width: 767.9px){
    background-image: url(${(props) => props.themeName === 'dark' ? glass_dark_mob_1x : glass_light_mob_1x });
  }  
  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767.9px),
          screen and (min-resolution : 192dpi) and (max-width: 767.9px),
          screen and (min-resolution : 2dppx) and (max-width: 7687.9px){
    background-image: url(${(props)=> props.themeName==='dark' ? glass_dark_mob_2x : glass_light_mob_2x });
  }
  @media screen and (min-device-pixel-ratio: 3) and (max-width: 767.9px),
          screen and (min-resolution : 288dpi) and (max-width: 767.9px),
          screen and (min-resolution : 3dppx) and (max-width: 767.9px){
    background-image: url(${(props)=> props.themeName==='dark' ? glass_dark_mob_3x : glass_light_mob_3x });
  }


  @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px),
          screen and (min-resolution : 96dpi) and (min-width: 768px),
          screen and (min-resolution : 1dppx) and (min-width: 768px){
    background-image: url(${(props) => props.themeName === 'dark' ? glass_dark_tab_1x : glass_light_tab_1x });
  }  
  @media screen and (min-device-pixel-ratio: 2) and (min-width:  768px),
          screen and (min-resolution : 192dpi) and (min-width:  768px),
          screen and (min-resolution : 2dppx) and (min-width:  768px){
    background-image: url(${(props)=> props.themeName==='dark' ? glass_dark_tab_2x : glass_light_tab_2x });
  }
  @media screen and (min-device-pixel-ratio: 3) and (min-width:  768px),
          screen and (min-resolution : 288dpi) and (min-width:  768px),
          screen and (min-resolution : 3dppx) and (min-width:  768px){
    background-image: url(${(props)=> props.themeName==='dark' ? glass_dark_tab_3x : glass_light_tab_3x });
  }

`;


//HomeGallery---------------------------------------

export const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleH2 = styled.h2`
  
  ${({hidden, theme, marginBottom})=> hidden 

                  ? ` width: 1px; 
                      height: 1px; 
                      margin: -1px;
                      padding: 0; 
                      border: 0; 
                      white-space: nowrap;
                      clip-path: inset(100%); 
                      clip: rect(0 0 0 0); 
                      overflow : hidden;`

                  : ` font-size: 32px; 
                      font-weight: 600; 
                      line-height: 1.1875;
                      margin-bottom: ${marginBottom || '40px'};
                      color: ${theme.mainTextColor};
                      transition: color var(--transition);

                      @media (min-width: 768px) and (max-width: 1439.98px) { 
                        font-size: 56px;
                        margin-bottom: ${marginBottom || '60px'};
                      }
                        
                      @media (min-width: 1440px) { 
                        font-size: 64px;
                        margin-bottom: ${marginBottom || '60px'};
                      }`
  }
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 60px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const CategoryTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.mainTextColor};
  transition: color var(--transition);

  @media (max-width: 320px) {
    font-size: 26px;
  }

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const DrinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 767px) {
    li:nth-of-type(2) {
      display: none;
    }
    li:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    flex-basis: calc(100% - 20px / 2);
    li:nth-of-type(2) {
      display: block;
    }
    li:nth-of-type(3) {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    flex-basis: calc(100% - 40px / 3);
    li:nth-of-type(2) {
      display: block;
    }
    li:nth-of-type(3) {
      display: block;
    }
  }
`;

export const LinkDrinks = styled(Link)`
  padding: 18px 44px;  
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  background-color: ${(props) => props.theme.backGroundBtnColor};
  color: ${(props) => props.theme.mainBackground};
  border: 2px solid ${(props) => props.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border var(--transition);

  &:hover,
  &:focus {
    border: 2px solid ${(props) => props.theme.borderBtnColorHover};
    background-color: ${(props) => props.theme.backGroundBtnColorHover};
    color: ${(props) => props.theme.mainBackground};
  }
`;