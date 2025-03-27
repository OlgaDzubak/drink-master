import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleIsBurgerModalOpen } from '../../../redux/modal/modalSlice';
import { selectIsBurgerModalOpen } from '../../../redux/modal/modalSelectors';
import { NavigationList, StyledLink } from './Navigation.styled';

const Navigation = ({ onClose }) => {
  
  const IsBurgerModalOpen = useSelector(selectIsBurgerModalOpen);
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    if (IsBurgerModalOpen) {
      dispatch(toggleIsBurgerModalOpen());
    }
  };
  return <NavigationList>

          <StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink>
          <StyledLink to="/drinks" onClick={handleLinkClick}>Drinks</StyledLink>
          <StyledLink to="/add" onClick={handleLinkClick}>Add Drink</StyledLink>
          <StyledLink to="/my" onClick={handleLinkClick}>My Drinks</StyledLink>
          <StyledLink to="/favorites" onClick={handleLinkClick}>Favorites</StyledLink>

        </NavigationList>
};

export default Navigation;
