import styled from '@emotion/styled';

export const IngredientItem = styled.li`
  width: 157px;
    
  @media (min-width: 768px) {
      width: 220px;
  }
`;

export const ImageThumb = styled.div`
  width: 157px;
  height: 157px;
  padding: 25px;
  margin-bottom: 8px;
  border-radius:8px;
  background-color: ${(props) => props.theme.imageBackground};

  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 22px;
  }
`;

export const Img = styled.img`
    width: 107px;
    height: 107px;
    
    @media (min-width: 768px) {
      width: 175px;
      height: 175px;
    }
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (min-width: 768px) {
    margin-bottom: 14px;
  }
`
export const IngredientName = styled.p`
  font-size: 14px;
  wrap-text: wrap;
  color: ${(props) => props.theme.mainTextColor};
  
  @media (min-width: 768px) {
      font-size: 18px;
  }
`
export const IngredientMeasure = styled.span`
  font-size: 14px;
  text-align: right;
  color: ${(props) => props.theme.seeMoreBtnTextColor};
  
  @media (min-width: 768px) {
      font-size: 16px;
  }
`

