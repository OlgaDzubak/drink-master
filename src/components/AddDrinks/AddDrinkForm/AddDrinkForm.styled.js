import styled from "@emotion/styled";

export const AddDrinkFormSection = styled.section`
`;

export const DrinkDescriptionFields = styled.div`
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding-top: 14px;
  padding-right: 40px;
  padding-bottom: 14px;
  padding-left: 40px;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.28;
  border: none;
  border-radius: 42px;
  word-wrap: break-word;
  color: ${(props)=>props.theme.mainBackground};
  background-color: ${(props)=>props.theme.backGroundBtnColor};
  border: 2px solid ${(props) => props.theme.borderBtnColor};
  transition: color var(--transition), background-color var(--transition), border-color var(--transition);

  &:hover, &:focus{
    border-color: ${(props) => props.theme.borderBtnColorHover};
    background-color: ${(props)=>props.theme.mainTextColor};
  }
`;

export const FormError = styled.div`
  height: 14px;
  font-size: 12px;
  color: #da1414;
  line-height: 1.166;
  margin-top: 2px;
`;