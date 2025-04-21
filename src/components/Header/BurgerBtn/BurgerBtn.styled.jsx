import styled from '@emotion/styled';
import { ReactComponent as BurgerIMG } from '../../../assets/images/burgermenu/burger.svg';
import { ReactComponent as BurgerCloseIMG } from '../../../assets/images/modal/closeIcon.svg';

export const StyledBurgerBtn = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  outline:none;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props)=>props.theme.mainTextColor};
  transition: color var(--transition);

  &:hover{
    transform : scale(1.1);
  }
`;
export const BurgerSVG = styled(BurgerIMG)`
  width: 30px;
  height: 30px;
  stroke: currentColor;
  transition: stroke var(--transition);
`;
export const CloseBurgerSVG = styled(BurgerCloseIMG)`
  width: 19px;
  height: 19px;
  stroke: currentColor;
  transition: stroke var(--transition);
`;
