import styled from "styled-components";
import { colorStyled } from '../../../../helpers/colorStyled';

export const FormError = styled.div`
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 8px;
`;

export const RecipeTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 40px;
  color: ${colorStyled.colorWhite};
`;

export const RecipeWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const RecipeLabel = styled.label`
  position: absolute;
  top: ${(props) => props.$isFocusedDescription || props.$hasValueDescription ? '-30px' : '15px'};
  left: 18px;
  font-size: 14px;
  transform-origin: left;
  transition: transform 25ms, color 200ms;
  pointer-events: none;
  color: ${(props) => props.$hasValueDescription ? '#3CBC81' : (props.$isFocusedDescription ? '#3CBC81' : '#F3F3F380')};
  
    @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const RecipeTextArea = styled.textarea`
  
  width: 100%;
  height: 184px;
  padding: 14px;
  resize: none;
  font-size: 17px;
  font-family: Manrope;
  line-height: 18px;
  word-wrap: break-word;
  border: 1px solid ${colorStyled.colorWhiteFifty};
  color: #f3f3f3;
  border-radius: 14px;
  background-color: transparent;

  &:focus + ${RecipeLabel}, &:not(:placeholder-shown) + ${RecipeLabel} {
    transform: translate(10px, -30px) scale(0.8);
    font-size: 12px;
  }
  @media (min-width: 768px) {
    width: 480px;
  }
`;