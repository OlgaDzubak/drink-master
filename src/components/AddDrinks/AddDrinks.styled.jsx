import styled from '@emotion/styled';

export const AddDrinkTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;
  margin-bottom: 40px;
  color: ${(props)=>props.theme.mainTextColor};

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;
export const TotalWrapper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
  }
`;
export const AsideLinksAndPopularDrinks = styled.aside`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;
