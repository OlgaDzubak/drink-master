import styled from '@emotion/styled';
import {ReactComponent as plusSvg} from '../../../../assets/images/add-drink/plus.svg';


export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    width: 833px;
  }
`;

//--------------------------------------------------
export const ImgAndErrorDiv = styled.div`
`;
export const DescriptionImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  color: ${(props)=>props.theme.mainBackground};
  background-color: ${(props) => props.theme.imageBackground};
  transition: background-color var(--transition), color var(--transition);
  cursor: pointer;

  .add-div {
    color: ${(props)=>props.theme.addImgSvgColor};
    transition: background-color var(--transition), color var(--transition);
  }

  &:hover {
   .add-div {
      background-color: ${(props) => props.theme.addImgBackgroundHover};
      color: ${(props) => props.theme.addImgSvgColorHover};
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    width: 320px;
    height: 320px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
export const ImageInputLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;
export const ImageInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    pointer-events: none;
`;
export const AddImageDiv = styled.div`

`;

export const PlusSVGDiv = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.addImgBackground};
`;
export const PlusSVG = styled(plusSvg)`
  width: 28px;
  height: 28px;
  stroke: currentColor;
`;
export const AddImageP = styled.p`
  text-align: center;
  color: ${(props)=>props.theme.authButtonColor};
`;
export const DrinkImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

//--------------------------------------------------
export const DataAndErrorDiv = styled.div`
  width: 100%;
  padding-top: 18px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`;
export const InputDiv = styled.div`
  position: relative;
  width: 100%;
`;
export const NameInputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.$isFocused || props.$hasValue ? '-7px' : '10px')};
  left: 0px;
  font-size: ${(props) => props.$isFocused || props.$hasValue ? '12px' : '14px'};
  pointer-events: none;
  color: ${(props) => props.$hasValue ? props.theme.inputLabelColordHasValue 
                                      : (props.$isFocused ? props.theme.inputLabelColordHasValue 
                                                          : props.theme.inputLabelColorNoValue)
          };
  transform: translateY(-8px);
  transition: top var(--transition), color var(--transition);;

  @media (min-width: 768px) {
    font-size: ${(props) => props.$isFocused || props.$hasValue ? '12px' : '16px'};
  }
`;
export const DescriptionInputLabel = styled.label`
  position: absolute;
  top: ${(props) => props.$isFocusedDescription || props.$hasValueDescription ? '-7px' : '10px'};
  left: 0px;
  font-size: ${(props) => props.$isFocusedDescription || props.$hasValueDescription ? '12px' : '14px'};
  pointer-events: none;
  color: ${(props) => props.$hasValueDescription ? props.theme.inputLabelColordHasValue 
                                      : (props.$isFocusedDescription ? props.theme.inputLabelColordHasValue 
                                                          : props.theme.inputLabelColorNoValue)
          };
  transform: translateY(-8px);
  transition: top var(--transition), color var(--transition);

  @media (min-width: 768px) {
    font-size: ${(props) => props.$isFocusedDescription || props.$hasValueDescription ? '12px' : '16px'};
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  line-height: 1.21;
  outline: none;
  border: 1px solid transparent;
  border-bottom: 1px solid  ${(props)=>props.theme.seeMoreBtnTextColor};
  background-color: transparent;
  color: ${(props)=>props.theme.mainTextColor};
  transition: border-color var(--transition), color var(--transition);

  @media (min-width: 768px) {
    font-size: 16px;
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

export const SelectInputDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  color:${(props)=>props.theme.mainTextColor};
  border-bottom: 1px solid ${(props)=>props.theme.seeMoreBtnTextColor};
  background-color: transparent;
  transition: border-color var(--transition), color var(--transition);
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const SelectLabelP = styled.p`
  left: 10px;
  transform-origin: left;
  transform: translateY(${(props)=> props.selectedCategory ? '-10px' : '10px'});
  pointer-events: none;
  color: ${(props) => (props.selectedCategory ? props.theme.inputLabelColordHasValue : props.theme.inputLabelColorNoValue)};
  font-size: ${(props) => props.selectedCategory ? '12px' : '14px'};
  transition: transform var(--transition), font-size var(--transition), color var(--transition);
  
  @media (min-width: 768px) {
    font-size: ${(props) => props.selectedCategory ? '12px' : '16px'};
  }
`;
export const selectStyles = (maxWidth, maxHeight, minHeight, controlOption, themeColors) => {
  
  return {
            control: (provided, state) => ({
              ...provided,
              fontSize: '17px',
              lineHeight : '1.56',
              letterSpacing: '-0.04em',
              minHeight: 'auto',
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              '&:hover': { cursor: 'pointer',},
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
            input: (provided) => ({
              ...provided,
              padding: 0,
              margin: 0,
              border: 'none',
              color: `${themeColors.mainTextColor}`,
            }),
            menu: (provided) => ({
              ...provided,
              width: `199px`,
              padding: '14px',
              borderRadius: '20px',
              overflow: 'hidden',
              right: '0px',
              backgroundColor: `${themeColors.selectMenuBackground}`,
            }),
            menuList: (provided) => ({
              ...provided,
              maxHeight: `${maxHeight}`,
              minHeight: `${minHeight}`,              
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
              textAlign: 'right',
              color: `${themeColors.mainTextColor}`,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: '0',
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
              color: `${state.isFocused ? themeColors.mainTextColor : themeColors.inputLabelColorNoValue}`,
              paddingTop: '0',
              paddingBottom: '0',
              '&:hover': { color: `${themeColors.mainTextColor}`,},
            }),
            clearIndicator: (baseStyles)=>({
              ...baseStyles,
              display: 'none',          
            }),
  }
};

export const RadioDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.56;
  color: ${(props) => props.checked ? props.theme.mainTextColor : props.theme.inputLabelColorNoValue};
  transition: color var(--transition);

  &.checked {
    color: ${(props) => props.theme.mainTextColor};
  }
`;
export const RadioInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;
export const RadioSpan = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 1.3px solid ${(props) => props.checked ? props.theme.mainTextColor : props.theme.inputLabelColorNoValue};
  border-radius: 50%;
  box-sizing: border-box;
  transition: border-color var(--transition);

  input[type="radio"]:checked + & {
    border-color: ${(props) => props.theme.mainTextColor};
  }

  input[type="radio"]:checked + &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.mainTextColor};
    transform: translate(-50%, -50%);
  }
`;
