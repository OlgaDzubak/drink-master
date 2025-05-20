import { useSelector, useDispatch } from 'react-redux'; 
import { selectUser } from '../../../redux/auth/authSelectors';
import { toggleIsUserProfileModalOpen, toggleIsLogoutModalOpen } from '../../../redux/modal/modalSlice';
import { UserLogoBtn, UserLogoImg, UserLogoText, UserLogoWrapper } from './UserLogog.styled';


export const UserLogo = () => {

  const { name, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const handleClickAvatar = (e) => {
    dispatch(toggleIsUserProfileModalOpen());
    e.currentTarget.blur(); 
  }

  const handleClickName = (e) => {
    dispatch(toggleIsLogoutModalOpen());
    e.currentTarget.blur();
  }

  return  <UserLogoWrapper>

              <UserLogoBtn onClick={handleClickAvatar} aria-label='user avatar'>
                <UserLogoImg src={avatarURL} alt="user icon" />
              </UserLogoBtn>

              <UserLogoBtn onClick={handleClickName} aria-label='user name'>
                <UserLogoText>{name}</UserLogoText>
              </UserLogoBtn>
              
          </UserLogoWrapper>
};
