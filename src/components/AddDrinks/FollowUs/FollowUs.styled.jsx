import styled from '@emotion/styled';

export const FollowUsWrapper = styled.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`;
export const FollowUsTitle = styled.h4`
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  color: ${(props)=>props.theme.mainTextColor};
  transition: color var(--transition);

    @media screen and (min-width: 768px){
    font-size: 24px;
  }
`;
