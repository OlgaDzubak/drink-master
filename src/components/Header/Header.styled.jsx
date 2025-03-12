import styled from '@emotion/styled';

export const HeaderEl = styled.header`
  position: relative;
  width: 100%;
  padding-top: 22px;
  padding-bottom: 22px;
  background-color: var(--mainbackground-color);
  border-bottom: 1px solid var(--whitetwenty-color);
  z-index: 150;
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
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
