import styled from "@emotion/styled";
import { colorStyled } from '../../../../helpers/colorStyled';

export const RecipeTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 40px;
  color: ${(props)=>props.theme.mainTextColor};
`;
export const RecipeDiv = styled.div`
  position: relative;
  width: 100%;
`;
export const RecipeLabel = styled.label`
  position: absolute;
  top: ${(props) => props.$isFocusedPreparation || props.$hasValuePreparation ? '-20px' : '10px'};
  left: ${(props) => props.$isFocusedPreparation || props.$hasValuePreparation ? '5px' : '18px'};
  font-size: 14px;
  transform-origin: left;
  transition: transform 25ms, color 200ms;
  pointer-events: none;
  color: ${(props) => props.$hasValuePreparation ? props.theme.inputLabelColordHasValue 
                                    : (props.$isFocusedPreparation ? props.theme.inputLabelColordHasValue 
                                                        : props.theme.inputLabelColorNoValue)
        };
  transition: top var(--transition), left var(--transition), color var(--transition), font-size var(--transition);

  @media (min-width: 768px) {
    font-size: ${(props) => props.$isFocusedPreparation || props.$hasValuePreparation ? '12px' : '16px'};
  }
`;
export const RecipeTextArea = styled.textarea`
  width: 100%;
  height: 184px;
  padding: 14px;
  resize: none;
  font-size: 17px;
  font-family: inherit;
  line-height: 18px;
  word-wrap: break-word;
  border-radius: 14px;
  outline: none;
  border: 1px solid ${(props)=>props.theme.inputLabelColorNoValue};
  color: ${(props)=>props.theme.mainTextColor};
  background-color: transparent;
  transition: color var(--transition), border-color var(--transition);

  &:hover{
    border-color: ${(props)=>props.theme.mainTextColor};
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`;