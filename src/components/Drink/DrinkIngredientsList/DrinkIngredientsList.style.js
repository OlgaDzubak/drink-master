import styled from '@emotion/styled';

export const IngredientsSection = styled.section`
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  color: ${(props)=>props.theme.seeMoreBtnTextColor};
  font-size: 16px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  @media (max-width: 374px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1280px) {
    gap: 35px;
  }
`;
