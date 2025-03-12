import styled from '@emotion/styled';
import { colorStyled, transitionStyled } from '../../../helpers/colorStyled';
import { ReactComponent as lookUpSvg } from '../../../assets/images/search.svg';

export const FilterStyles = styled.div`
  
`;

export const FilterForm = styled.form`

  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 40px;
  row-gap: 14px;
  justify-content: center;
  
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

  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  font-height : 1.56;
  width: 100%;
  padding: 14px 24px 14px 24px;
  border-radius: 20em;
  background-color: transparent;
  border: 1px solid ${colorStyled.colorWhiteTwenty};
  color: ${colorStyled.colorWhite};
  transition: border-color ${transitionStyled.trs_600}, background-color ${transitionStyled.trs_600};

  &::placeholder{
    color: ${colorStyled.colorWhite};
  }

  &:hover, &:focus{
    border-color:  ${colorStyled.colorWhiteFifty};
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
    stroke: ${colorStyled.colorWhite};

    &:hover, &:focus{
      stroke-width: 1.8;
    };
`;

export const CreatableSelectStyles = (maxHeight, minHeight, controlOption) => {
    return (
      { 
        control: (baseStyles, state) => ({
            ...baseStyles, 
            padding: '10px 16px 10px 22px',
            fontFamily: 'Manrope',
            fontWeight: '400',
            fontSize: '14px',
            fontHeight : '1.56',
            letterSpacing: '-0.04em',
            width: "100%",
            height: "56px",
            border: "none",
            borderRadius: "200px",
            backgroundColor: `${colorStyled.colorBlue}`,
            transition: 'borderColor 650ms cubic-bezier(0.4, 0, 0.2, 1)',

            ':hover': {
              border: `1px solid ${colorStyled.colorWhiteTwenty}`,
              },

            ':focus': {
              border: `1px solid ${colorStyled.colorWhiteTwenty}`,
              },

              "@media only screen and (min-width: 768px)": {
                ...baseStyles["@media only screen and (min-width: 768px)"],
                fontSize: '17px',
                width: "199px",
              },
          }),
        valueContainer: (baseStyles)=>({
            ...baseStyles,
            padding: '0',
          }),
        input: (baseStyles) => ({
            ...baseStyles,
            padding: '0',
            marging: '0',
            color: `${colorStyled.colorWhite}`,
            transition: `color ${transitionStyled.trs_250}`,
          }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isFocused ? `${colorStyled.colorWhiteFifty}` : `${colorStyled.colorWhite}`,
          transition: `opacity ${transitionStyled.trs_600}`,
          }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: `${colorStyled.colorWhite}`,
          }),
        indicatorSeparator: (baseStyles)=>({
          display: 'none',
          }),
        menu: (baseStyles) => ({
          ...baseStyles,
          padding: '14px 8px 14px 8px',
          fontWeight: '400',
          fontSize: '14px',
          fontHeight : '1.56',

          backgroundColor: `${colorStyled.colorBlue}`,
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
        option: (baseStyles, { data, isDisabled, isFocused, isSelected }) => ({
          ...baseStyles,
          padding: '8px 7px  8px 15px',
          backgroundColor: 'transparent',
          color: (controlOption==="") ? `${colorStyled.colorWhiteFifty}` : (isSelected ? `${colorStyled.colorWhiteFifty}` : `${colorStyled.colorWhiteFourty}`),
          cursor: isDisabled ? 'not-allowed' : 'default',
          transition: `color ${transitionStyled.trs_250}`,
          ':hover': {
            ...baseStyles[':hover'],
            color: `${colorStyled.colorWhite}`,
          },
          ':active': {
            ...baseStyles[':active'],
            borderRadius: "200px",
          },
  
          }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
          ':hover': {
            ...baseStyles[':hover'],
            color: `${colorStyled.colorWhite}`,
          },
          }),
        clearIndicator: (baseStyles)=>({
          ...baseStyles,
          display: 'none',          
        }),
      }
)};