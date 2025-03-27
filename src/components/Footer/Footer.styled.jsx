import styled from '@emotion/styled';

export const FooterEl = styled.footer`
  position: relative;
  padding-top: 40px;
  padding-bottom: 18px;
  color:  ${(props) => props.theme.footerTextColor};
  background-color:  ${(props) => props.theme.footerBackgroundColor};
  border-top: 1px solid ${(props) => props.theme.borderHeaderColor};
  overflow: hidden;

  @media (min-width: 767.8px){
    padding-top: 80px;
    padding-bottom: 24px;
  }


`;

export const FooterContainer = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 767.8px){
    width: 375px;
    padding: 0 20px;
  }

  @media (min-width: 768px) and (max-width: 1279.8px){
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const FooterMedia = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterMediaNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 400px;
  
  @media screen and (max-width: 1279px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    gap: 0;
  }
`;