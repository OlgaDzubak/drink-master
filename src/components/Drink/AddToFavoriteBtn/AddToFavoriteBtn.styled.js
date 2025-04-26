import styled from '@emotion/styled';

export const Button = styled.button`
  width: 222px;
  padding-bottom: 14px;
  padding-top: 14px;
  margin-bottom: 80px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 42px;
  border-color: transparent;
  border: 2px solid ${(props) => props.theme.borderBtnColor};
  background-color: ${(props) => props.theme.backGroundBtnColor};
  color: ${(props) => props.theme.mainBackground};
  transition: color var(--transition), background-color var(--transition), border var(--transition);
  
  &:hover, &:focus {
    border: 2px solid ${(props) => props.theme.borderBtnColorHover};
    background-color: ${(props) => props.theme.backGroundBtnColorHover};
    color: ${(props) => props.theme.mainBackground};
  }

  &:active{
    border: 2px solid ${(props) => props.theme.backGroundBtnColorActive};
    background-color: ${(props) => props.theme.backGroundBtnColorActive};
    color: ${(props) => props.theme.btnColorActive};
  }

  @media (max-width: 374px) {
    margin-left: 40px;
  }

  @media (min-width: 768px) {
    width: 250px;
    font-size: 16px;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;
