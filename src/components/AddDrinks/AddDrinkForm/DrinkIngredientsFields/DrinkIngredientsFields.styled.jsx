import styled from 'styled-components';
import { colorStyled } from '../../../../helpers/colorStyled';
import { ReactComponent as PlusSVG } from '../../../../assets/AddDrink/PlusForm.svg';
import { ReactComponent as MinuseSVG } from '../../../../assets/AddDrink/MinusForm.svg';
import { ReactComponent as DeleteSVG } from '../../../../assets/AddDrink/X.svg';
import Select from 'react-select';

export const FormError = styled.p`
  padding-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  color: #da1414;
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;

  @media (min-width: 1280px) {
    width: 540px;
  }
`;
export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;
export const IngredientsTitle = styled.h3`
  font-size: 28px;
`;
export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${colorStyled.colorWhiteFifty};
`;
export const ControlMinuse = styled(MinuseSVG)`
  stroke: ${colorStyled.colorWhite};
`;
export const ControlsButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: ${colorStyled.colorWhiteFifty};
  }
`;
export const ControlPluse = styled(PlusSVG)`
  stroke: ${colorStyled.colorWhite};
`;

export const IngredientsWrapperSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  


  @media (min-width: 768px) {
    gap: 14px;
    justify-content: flex-start;
  }
`;
export const IngredientNameDiv = styled.div`
 // display: block;
`;
export const CreatableSelectStyles = (controlOption) => {
    return (
      {
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
          height: 'auto',
          padding: '15px 24px',
          backgroundColor: 'transparent',
          border: state.isFocused
            ? `1px solid ${colorStyled.colorWhite}`
            : `1px solid ${colorStyled.colorWhiteFifty}`,
          boxShadow: 'none',
          borderRadius: '200px',
          '&:hover': {
            borderColor: `${colorStyled.colorWhite}`,
            cursor: 'pointer',
          },
        }),
        placeholder: (provided, state) => ({
          ...provided,
          margin: 0,
          color: state.isFocused ? `${colorStyled.colorWhite}` : `${colorStyled.colorWhiteFifty}`,
        }),
        option: (provided) => ({
          ...provided,
          padding: '8px',
          color: `${colorStyled.colorWhiteFifty}`,
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            color: `${colorStyled.colorWhite}`,
          },
        }),
        input: (provided) => ({
          ...provided,
          padding: 0,
          margin: 0,
          border: 'none',
          color: `${colorStyled.colorWhite}`,
        }),
        menu: (provided) => ({
          ...provided,
          padding: '14px',
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
        }),
        menuList: (provided) => ({
          ...provided,
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "none"
          },
          "::-webkit-scrollbar-thumb": {
            background: `${colorStyled.buttonCancel}`
          },
          "::-webkit-scrollbar-corner": {
            background: 'none',
          }, 
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: state.isFocused ? `${colorStyled.colorWhiteFifty}` : `${colorStyled.colorWhite}`,
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: '0',
          lineHeight: '1.56',
          fontSize: '17px',
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          padding: 0,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
          color: `${colorStyled.colorWhiteFifty}`,
          '&:hover': { color: `${colorStyled.colorWhite}` },
        }),
        clearIndicator: (baseStyles)=>({
          ...baseStyles,
          display: 'none',          
        }),
      })
};

export const IngredientMeasureDiv = styled.div`
 //display: block;
`;
export const IngredientsInput = styled.input`
  width: 100px;
  padding: 15px 24px;
  font-family: 'Monrope', sans-serif;
  font-size: 17px;
  line-height: 1.489;
  color:  #f3f3f3;
  background-color: transparent;

  border-radius: 200px;
  border: 1px rgba(243, 243, 243, 0.5) solid;
  box-sizing: border-box;

  &:hover, &:focus {
    color: ${colorStyled.colorWhite};
    border-color: ${colorStyled.colorWhite};
  }

  @media (min-width: 768px) {
    min-width: 150px;
  }
`;

export const IngredientsDeleteButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  transform : translateY(18.5px);
  background: transparent;
  border: none;

  &:disabled ${ControlMinuse} {
    stroke: ${colorStyled.colorWhiteFifty};
  }

  @media (min-width: 375px) {
    padding: 0;
  }
`;
export const IngredientsDelete = styled(DeleteSVG)`
  stroke: ${colorStyled.colorWhiteFifty};
  &:hover {
    stroke: ${colorStyled.colorWhite};
  }
`;
