import styled from '@emotion/styled';
import { colorStyled, transitionStyled } from '../../../helpers/colorStyled';
import { ReactComponent as lookUpSvg } from '../../../assets/images/search.svg';


export const FilterStyles = styled.div`
  
`;

export const FilterForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 40px;
  row-gap: 14px;
  justify-content: center;
  z-index: 200;
  
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    justify-content: flex-start;
    align-items: center;
  }
  
`;

export const Styled_InputLabel = styled.label`

`;

export const Styled_Span_for_Input_and_LookUpIcon = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const Styled_Input = styled.input`
  font-family: inherit;
  font-size: 14px;
  line-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${(props)=> props.theme.filterDrinksBorderColor};
  color: ${(props)=> props.theme.mainTextColor};
  transition: border-color var(--transition), background-color var(--transition);

  &::placeholder{
    color: ${(props)=> props.theme.mainTextColor};
  }

  &:hover, &:focus{
    border-color:  ${(props)=> props.theme.filterDrinksBorderColorHover};
  };

  @media (min-width: 768px) {
    font-size: 17px;
    width: 264px;
  }
`;

export const LookUpSpan = styled.span`
    position: absolute;
    right: 24px;
    top: 17px;
    padding:0;
    border: 0;
    background-color: transparent;
    outline: none;
`;

export const LookUpIcon = styled(lookUpSvg)`
    width: 20px;
    height: 20px;
    stroke: ${(props)=> props.theme.mainTextColor};

    &:hover, &:focus{
      stroke-width: 1.8;
    };
`;


export const CreatableSelectStyles = (maxHeight, minHeight, controlOption, themeColors) => {
 
  return  { 
            control: (baseStyles, state) => {
              return {
                ...baseStyles, 
                padding: '10px 16px 10px 22px',
                fontFamily: 'inherit',
                fontSize: '17px',
                lineHeight : '1.56',
                letterSpacing: '-0.04em',
                width: "100%",
                height: "56px",
                border: "none",
                borderRadius: "200px",
                backgroundColor: `${themeColors.navBackgroundColorHover}`,
                // transition: 'border-color 650ms cubic-bezier(0.4, 0, 0.2, 1)',
                // ':hover': {},
                // ':focus': {},

                  "@media only screen and (min-width: 768px)": {
                    ...baseStyles["@media only screen and (min-width: 768px)"],
                    fontSize: '17px',
                    width: "199px",
                  },
              }},
            valueContainer: (baseStyles)=>({
                ...baseStyles,
                padding: '0',
                color:`${themeColors.footerTextColor}`,
              }),
            input: (baseStyles) => ({
                ...baseStyles,
                padding: '0',
                margin: '0',
                color:`${themeColors.footerTextColor}`,
                cursor: 'text',
              }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              color: `${themeColors.selectInputColor}`,
              }),
            placeholder: (baseStyles) => ({
                ...baseStyles,
                color: `${themeColors.footerTextColor}`,
              }),
            indicatorSeparator: (baseStyles)=>({
              display: 'none',
              }),
            menu: (baseStyles) => ({
              ...baseStyles,
              padding: '14px 8px 14px 8px',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight : '1.56',
              backgroundColor: `${themeColors.selectMenuBackground}`,
              border: 'none',
              borderRadius: "20px",
              transition: "all 600ms ease-in-out",
              
              "@media only screen and (min-width: 768px)": {
                ...baseStyles["@media only screen and (min-width: 768px)"],
                fontSize: '17px',
                width: "199px",
              },
              }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              padding: '0',
              maxHeight: `${maxHeight}`,
              minHeight: `${minHeight}`,
              overflow: 'scroll',
              "::-webkit-scrollbar": { width: "8px"},
              "::-webkit-scrollbar-track": { background: "none"},
              "::-webkit-scrollbar-thumb": { background: `${themeColors.selectScrollbarThumbColor}`},
              "::-webkit-scrollbar-corner":{ background: 'none'},          
              }),
            option: (baseStyles, { data, isDisabled, isFocused, isSelected }) => ({
              ...baseStyles,
              padding: '8px 7px  8px 15px',
              backgroundColor: 'transparent',
              color: (controlOption==="") 
                                ? `${themeColors.selectOptionColor}` 
                                : (isSelected 
                                          ? `${themeColors.selectOptionColor_focused}` 
                                          : `${themeColors.selectOptionColor}`),
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              transition: `color var(--transition)`,
              ':hover': {
                ...baseStyles[':hover'],
                color: `${themeColors.selectOptionColor_focused}`,
              },
              ':active': {
                ...baseStyles[':active'],
                borderRadius: "200px",
              },
      
              }),
            dropdownIndicator: (baseStyles, state) => ({
              ...baseStyles,
              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
              color: `${themeColors.selectDropdownIndicatorColor}`,
              cursor: 'pointer',
              ':hover': {
                ...baseStyles[':hover'],
                color: `${themeColors.selectdropdownIndicatorColorHover}`,
              },
              }),
            clearIndicator: (baseStyles)=>({
              ...baseStyles,
              display: 'none',          
            }),
          }
};