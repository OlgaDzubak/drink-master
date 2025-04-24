import styled from '@emotion/styled';

export const Main = styled.main`
  overflow: hidden;
  min-height: calc(100vh - 614px);

  
  @media screen and (min-width: 767.8px){
    min-height: calc(100vh - 566px);
  }
  @media screen and (min-width: 767.8px){
    min-height: calc(100vh - 512px);
  }
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
    padding: 72px 20px 140px 20px;
  }
`;

export const ModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;    
    background-color: transparent;
    z-index: 300;
    overflow: auto;

    @media screen and (max-width: 767.8px){
      padding: 80px 20px 80px 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 1279.8px){
      padding: 140px 32px 140px 32px;
    }

    @media screen and (min-width: 1280px) {
      padding: 130px 20px 140px 20px;
    }
`;


