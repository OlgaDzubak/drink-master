import { useSelector, useDispatch } from 'react-redux';
import { toggleIsBurgerModalOpen } from '../../../redux/modal/modalSlice';
import { selectIsBurgerModalOpen } from '../../../redux/modal/modalSelectors';
import { NavigationList, StyledLink } from './Navigation.styled';

const Navigation = () => {
  
  const IsBurgerModalOpen = useSelector(selectIsBurgerModalOpen);
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    if (IsBurgerModalOpen) {
      dispatch(toggleIsBurgerModalOpen());
    }
  };
  return <NavigationList>

          <StyledLink to="/" onClick={handleLinkClick} aria-label='home page'>Home</StyledLink>
          <StyledLink to="/drinks" onClick={handleLinkClick} aria-label='drinks page'>Drinks</StyledLink>
          <StyledLink to="/add" onClick={handleLinkClick} aria-label='add-drinks page'>Add Drink</StyledLink>
          <StyledLink to="/my" onClick={handleLinkClick} aria-label='own-drinks page'>My Drinks</StyledLink>
          <StyledLink to="/favorites" onClick={handleLinkClick} aria-label='favorite-drinks page'>Favorites</StyledLink>

        </NavigationList>
};

export default Navigation;
