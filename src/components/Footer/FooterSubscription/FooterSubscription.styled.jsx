import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const SubWrapper = styled.div`
  width: 309px;
  
  @media screen and (max-width: 767px) {
    width: 335px;
    margin-top: 40px;
    margin-bottom: 80px;
    align-items: center;
  }
`;

export const SubFormContenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledSubLabel = styled.label`
  display: none;
`;

export const StyledSubField = styled(Field)`
  width: 309px;
  height: 56px;
  padding: 10px;
  font-size: 17px;
  line-height: 1.56;
  text-align: center;
  color: ${(props) => props.theme.footerTextColor};
  background-color: transparent;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.footerLinkBorderColor};
  transition: border-color var(--transition), color var(--transition);

  &::placeholder{
    color: ${(props) => props.theme.footerTextColor};
  }

  // &:hover{
  //   border-color: ${(props) => props.theme.footerLinkBorderColorHover};

  }
`;

export const StyledSubError = styled.p`
  height: 14px;
  margin-top: 2px;
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
  color : ${(props) => props.theme.formErrorMsgColor};
`;

export const StyledSubBtn = styled.button`
  width: 309px;
  height: 56px; 
  padding: 10px;
  margin-top: 12px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.56;
  border: none;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.footerLinkBorderColor};
  color: inherit;
  transition: background-color var(--transition), color var(--transition), border-color var(--transition);

  &:hover {
    background-color: ${(props) => props.theme.footerTextColor};
    color: ${(props) => props.theme.navBackgroundColorHover};
  }
`;

export const StyledSubText = styled.p`
  width: 309px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.33;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledSubForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;
