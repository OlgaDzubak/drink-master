import styled from '@emotion/styled';
import { StyledTitle } from '../Welcome/Welcome.styled';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const StyledAuthContainer = styled.div`
  min-width: 367px;
  max-width: 464px;
  width: 100%;
  padding-top: 191px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 375px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 280px;
    padding-left: 64px;
    padding-right: 0px;
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
  max-width: 400px;
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 42px;
  text-decoration: underline;
  border: none;
  text-align: center;
  color:var(--white-color);
  background-color: transparent;
  transition: background-color var(--transition), color var(--transition);

  &:hover, &:focus {
    background-color: var(--white-color);
    color: var(--blue-color);
  }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 42px;
  text-decoration: underline;
  border: none;
  text-align: center;
  color:var(--white-color);
  background-color: transparent;
  transition: background-color var(--transition), color var(--transition);

  &:hover, &:focus {
    background-color: var(--white-color);
    color: var(--blue-color);
  }
  }
`;