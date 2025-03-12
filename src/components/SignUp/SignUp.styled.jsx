import styled from '@emotion/styled';
import { Button, DialogContent } from '@mui/material';
import { StyledTitle } from '../Welcome/Welcome.styled';
import { Form, Field } from 'formik';

export const StyledAuthContainer = styled.div`
  min-width: 320px;
  padding-top: 191px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 375px) {
    width: 335px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding-top: 280px;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 64px;
    margin-right: auto;
    align-items: start;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 153px;
    margin-left: 100px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  min-width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`;

export const StyledTitleAuth = styled(StyledTitle)`
  margin-bottom: 28px;
`;

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  border: 1px solid
    ${(props) =>
      props.error === 'true'
        ? '#da1414'
        : props.success === 'true'
        ? '#3CBC81'
        : 'rgba(243, 243, 243, 0.5)'};
  background-color: rgba(243, 243, 243, 0);
  border-radius: 24px;
  color: #f3f3f3;

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 156%;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    ::placeholder {
      color: rgba(243, 243, 243);
    }
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const FieldsInputAuthContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;

@media screen and (min-width: 768px) {
  margin-bottom: 40px;
}
`;

export const StyledButtonsContainer = styled.div`
  display: flex; 
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  padding-top: 18px;
  padding-bottom: 18px;
  font-size: 14px;
  line-height: 1.28;
  background-color: rgba(243, 243, 243, 0);
  border-radius: 42px;
  color: #f3f3f3;
  text-decoration: underline;
  text-transform: none;
  transition: background-color var(--transition), color var(--transition);

  && {
    &:hover,
    &:focus {
      background-color: var(--white-color);
      color: var(--blue-color);

    }
  }
`;