import { useSelector, useDispatch } from 'react-redux';
import { selectIsBurgerModalOpen } from '../../../redux/modal/modalSelectors';
import { toggleIsBurgerModalOpen } from '../../../redux/modal/modalSlice';
import { BurgerSVG, StyledBurgerBtn, CloseBurgerSVG } from './BurgerBtn.styled';

export const BurgerBtn = () => {

  const isBurgerModalOpen = useSelector(selectIsBurgerModalOpen);
  const dispatch = useDispatch();

  return  <StyledBurgerBtn onClick={()=>dispatch(toggleIsBurgerModalOpen())}>
            {isBurgerModalOpen ? <CloseBurgerSVG /> : <BurgerSVG />}
          </StyledBurgerBtn>
};