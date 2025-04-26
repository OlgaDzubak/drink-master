import styled from '@emotion/styled';

export const DrinkHeroSection = styled.section`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    margin-bottom: 80px;

  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 100px;
  }
`;

export const BoxWrapper = styled.div`
  max-width: 750px;
  
    @media screen and (min-width: 1280px) {
      padding-top: 30px;
  }
`;

export const SubTitle = styled.p`

  margin-bottom: 20px;
  margin-top: 8px;
  color: ${(props)=>props.theme.seeMoreBtnTextColor};
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ShortDescr = styled.p`
  width: 335px;
  font-size: 14px;
  margin-bottom: 40px;
  color:${(props)=>props.theme.mainTextColor};
  
  @media (max-width: 374px) {
    width: 310px;
  }

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`;