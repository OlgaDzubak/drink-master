import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

//Hero---------------------------------------
export const HeroSection = styled.section`
  display: flex;

  @media screen and (max-width: 767px) {
    margin-bottom: 110px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 160px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const BoxWrapper = styled.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`;

export const HeroTitle = styled.h1`
  color: var(--white-color);
  font-size: 32px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: 0;
  margin-bottom: 16px;

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
  color: var(--white-color);

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
  border-radius: 42px;
  padding: 18px 44px;
  margin-bottom: 47px;
  cursor: pointer;
  background-color: var(--white-color);
  color: var(--blue-color);
  transition: color var(--transition), background var(--transition);

  &:hover,
  &:focus {
    background: var(--blue-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1280px) {
    border-radius: 42px;
    padding: 18px 44px;
    margin-bottom: 0px;
    cursor: pointer;
    background: var(--white-color);
    color: var(--blue-color);
  }
`;

export const ImgMain = styled.img`
  @media screen and (max-width: 767.8px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`;


//HomeGallery---------------------------------------

export const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 16px;
  padding: 18px 44px;
  font-weight: 600;
  line-height: 1.125;
  word-wrap: break-word;
  border-radius: 42px;
  cursor: pointer;
  color: var(--blue-color);
  background-color: var(--white-color);
  transition: color var(--transition), background var(--transition);

  &:hover,
  &:focus {
    background-color: var(--blue-color);
    color: var(--white-color);
  }
`;