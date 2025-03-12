import styled from 'styled-components';

export const DrinkHeroSection = styled.section`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 160px;
  }
`;

export const BoxWrapper = styled.div`
  max-width: 593px;
  
    @media screen and (min-width: 1280px) {
      padding-top: 30px;
  }
`;

export const SubTitle = styled.p`

  margin-bottom: 20px;
  margin-top: 8px;
  color: var(--whitefifty-color);
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ShortDescr = styled.p`

@media (max-width: 374px) {
    width: 310px;
  }

  margin-bottom: 40px;
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    width: 593px;
    font-size: 16px;
  }
`;