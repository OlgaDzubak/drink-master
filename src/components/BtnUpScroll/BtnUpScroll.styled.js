import styled from "@emotion/styled";
import { ReactComponent as Svg} from '../../assets/images/upscroll.svg';

export const ScrollToTopDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 2px solid ${(props)=>props.theme.scrollUpBtnColor};
  background-color: ${(props)=>props.theme.mainTextColor};
  color: ${(props)=>props.theme.scrollUpBtnColor};
  fill: ${(props)=>props.theme.scrollUpBtnColor};
  stroke:  ${(props)=>props.theme.scrollUpBtnColor};
  transition: color var(--transition), border-color var(--transition);

  &:hover{
    border-color: ${(props)=>props.theme.scrollUpBtnColorHover};
    color: ${(props)=>props.theme.scrollUpBtnColorHover};
  }
`;

export const UpScrollSvg = styled(Svg)`
  width: 20px;
  height: 20px;
  fill: currentColor;
  stroke: currentColor;
  transition: fill var(--transition), stroke var(--transition);
`;