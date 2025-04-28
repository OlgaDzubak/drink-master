import styled from "@emotion/styled";
import { ReactComponent as PlusSVG } from '../../../../assets/images/add-drink/PlusForm.svg';
import { ReactComponent as MinuseSVG } from '../../../../assets/images/add-drink/MinusForm.svg';
import { ReactComponent as DeleteSVG } from '../../../../assets/images/add-drink/X.svg';

export const FormError = styled.p`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  color: #da1414;
`;

//--------------------------------------------------
export const IngredientsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;

  @media (min-width: 1280px) {
    width: 540px;
  }
`;
export const ControlDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;
export const IngredientsTitle = styled.h3`
  font-size: 28px;
  color: ${(props)=>props.theme.mainTextColor};
`;
export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${(props)=>props.theme.filterDrinksBorderColorHover};
`;
export const ControlMinuse = styled(MinuseSVG)`
  stroke: currentColor;
`;
export const ControlsButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  color: ${(props)=>props.theme.filterDrinksBorderColor};
  transition: color var(--transition);

  &:hover {
    color: ${(props)=>props.theme.mainTextColor};
  }
`;
export const ControlPluse = styled(PlusSVG)`
  stroke: currentColor;
`;

//--------------------------------------------------
export const IngredientsList = styled.ul`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439.9px){
    width: 100%;
  }
`;
export const IngredientsListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DataDiv = styled.div`
  display: flex;
`;

export const IngredientNameDiv = styled.div`
  margin-right: 14px;

  @media screen and (max-width: 767.9px){
    margin-right: 8px;
  }
`;
export const IngredientSelectLabel = styled.label`
  padding: 0;
  margin: 0;
  transition: color var(--transition), border-color var(--transition);
`;
export const CreatableSelectStyles = (controlOption, themeColors) => {
  return {
            container: (provided) => ({
              ...provided,
              minWidth: '140px',
              '@media (min-width: 375px)': {
                minWidth: '200px',
              },
              '@media (min-width: 768px)': {
                minWidth: '332px',
              },
            }),
            control: (provided, state) => ({
              ...provided,
              padding: '14px 24px',
              backgroundColor: 'transparent',
              borderRadius: '200px',
              border: state.isFocused ? `1px solid ${themeColors.mainTextColor}` : `1px solid ${themeColors.inputLabelColorNoValue}`,
              boxShadow: 'none',
              transition: 'border-color 400ms cubic-bezier(0.4, 0, 0.2, 1), color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': { borderColor: `${themeColors.mainTextColor}`,},
            }),
            placeholder: (provided, state) => ({
              ...provided,
              margin: 0,
              color: `${themeColors.inputLabelColorNoValue}`,
              transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            }),
            option: (provided) => ({
              ...provided,
              padding: '8px',
              color: `${themeColors.selectOptionColor}`,
              backgroundColor: `${themeColors.selectMenuBackground}`,
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover': { color: `${themeColors.selectOptionColor_focused}`,},
            }),
            input: (provided, state) => ({
              ...provided,
              padding: 0,
              margin: 0,
              border: 'none',
              color: state.isFocused ? `${themeColors.mainTextColor}` : `${themeColors.inputLabelColorNoValue}`,
            }),
            menu: (provided) => ({
              ...provided,
              width: `199px`,
              padding: '14px',
              borderRadius: '20px',
              overflow: 'hidden',
              right: '0px',
              backgroundColor: `${themeColors.selectMenuBackground}`,
              transition: 'background-color 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            }),
            menuList: (provided) => ({
              ...provided,
              padding: '5px',
              overflow: 'scroll',
              "::-webkit-scrollbar": {width: "8px",},
              "::-webkit-scrollbar-track":  {background: "none",},
              "::-webkit-scrollbar-thumb":  {background: `${themeColors.selectScrollbarThumbColor}`},
              "::-webkit-scrollbar-corner": {background: 'none',}, 
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              display: 'none',
            }),
            singleValue: (provided, state) => ({
              ...provided,
              textAlign: 'left',
              color: `${themeColors.mainTextColor}`,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: '0',
              lineHeight: '1.56',
              fontSize: '17px',
              color: `${themeColors.mainTextColor}`,
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              padding: 0,
              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
              color: `${state.isFocused ? themeColors.mainTextColor : themeColors.inputLabelColorNoValue}`,
              '&:hover': { color: `${themeColors.mainTextColor}`,},
            }),
            clearIndicator: (baseStyles)=>({
              ...baseStyles,
              display: 'none',          
            }),
          }
};

export const IngredientMeasureDiv = styled.div`
  margin-right: 40px;

  @media screen and (max-width: 767.9px ){
    margin-right: 8px;
  }
`;
export const IngredientsInputLabel = styled.label`
`;
export const IngredientsInput = styled.input`
  width: 100px;
  padding: 14px 24px;
  font-size: 17px;
  line-height: 1.56;
  outline: none;
  color: ${(props)=>props.theme.mainTextColor};
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid ${(props)=>props.theme.inputLabelColorNoValue};
  transition: color var(--transition), border-color var(--transition);

  &:hover, &:focus{
    border-color: ${(props)=>props.theme.mainTextColor};
  }

  @media (min-width: 768px) {
    min-width: 150px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus{
        -webkit-text-fill-color: ${(props)=>props.theme.mainTextColor};
        -webkit-text-stroke-color: ${(props)=>props.theme.mainTextColor};
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        caret-color: ${(props)=>props.theme.mainTextColor};
        transition: background-color 3000s ease-in-out 0s, color 3000s ease-in-out 0s;
  }
`;

export const DelBtnDiv = styled.div`
`;
export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0px 18px 0px;
`;
export const IngredientsDelBtn = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  color: ${(props)=>props.theme.inputLabelColorNoValue};
  transition: color var(--transition), border-color var(--transition);
  &:hover{
    color: ${(props)=>props.theme.mainTextColor};
  }
`;
export const IngredientsDelSvg = styled(DeleteSVG)`
  stroke: currentColor;
`;


