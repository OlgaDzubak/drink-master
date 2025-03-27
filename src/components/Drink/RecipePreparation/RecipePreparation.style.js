import styled from '@emotion/styled';

export const RecipeSection = styled.section` 
  width:100%;
  display: flex;
  flex-direction: column;
  
`
export const Recipe = styled.div`

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  color: ${(props)=>props.theme.mainTextColor};
`;

export const Preparation = styled.p`
  
  width: 335px;
  font-size: 14px;
  margin-bottom: 40px;
  color: ${(props)=>props.theme.mainTextColor};

  @media (max-width: 374px) {
    width: 300px;
  }
  
  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`;
