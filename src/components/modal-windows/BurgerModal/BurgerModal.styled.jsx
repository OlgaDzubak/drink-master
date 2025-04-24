import styled from '@emotion/styled';

export const MobileMenuBackdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%; 
    padding: 0;
    background-color: transparent;
    z-index: 200;
    overflow: hidden;
`;

export const BurgerModalWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: calc(100vh);
  background-color: ${(props)=>props.theme.mainBackground};
  z-index: 201;
  transition: background-color var(--transition);
`;
