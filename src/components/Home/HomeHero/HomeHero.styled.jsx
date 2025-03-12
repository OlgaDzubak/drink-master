import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  display: flex;

  @media screen and (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
    padding-bottom: 140px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1279.5px) {
    flex-direction: column;
  }

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

export const Title = styled.h1`
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
  @media screen and (max-width: 767px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`;
//   @media screen and (max-width: 1279.5px) {
//     display: none;
//   }

//   @media screen and (min-width: 1280px) {
//     position: absolute;
//     bottom: -140px;
//     right: 80px;
//     display: flex;
//     z-index: -1;
//     width: 387px;
//     height: 381px;
//     border-radius: 387px;
//     background: rgba(188, 230, 210, 0.3);
//     filter: blur(104.8543701171875px);
//   }
// `;