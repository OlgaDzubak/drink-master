import styled from '@emotion/styled';

export const Main = styled.main`
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;  
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767.8px){
    width: 375px;
    padding: 80px 20px 80px 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.8px){
    width: 768px;
    padding: 140px 32px 140px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 130px 20px 140px 20px;
  }
`;

export const StyledBlock = styled.div`
  position: absolute;
  top: 10px;
  left: -780px;
  width: 784px;
  height: 849px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: -10;
`;

export const StyledBlockTwo = styled.div`
  position: absolute;
  display: flex;
  z-index: -1;
  top: 498px;
  right: -470px;
  width: 549px;
  height: 543px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.854px);
  z-index: -10;
`;