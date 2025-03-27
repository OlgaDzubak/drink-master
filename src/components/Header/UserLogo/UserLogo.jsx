import { useSelector, useDispatch } from 'react-redux'; 
import { selectUser } from '../../../redux/auth/authSelectors';
import { toggleIsUserProfileModalOpen, toggleIsLogoutModalOpen } from '../../../redux/modal/modalSlice';
import { UserLogoBtn, UserLogoImg, UserLogoText, UserLogoWrapper } from './UserLogog.styled';

export const UserLogo = () => {

  const { name, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();

  return  <UserLogoWrapper>

              <UserLogoBtn onClick={()=>dispatch(toggleIsUserProfileModalOpen())}>
                <UserLogoImg src={avatarURL} alt="user icon" />
              </UserLogoBtn>

              <UserLogoBtn onClick={()=>dispatch(toggleIsLogoutModalOpen())}>
                <UserLogoText>{name}</UserLogoText>
              </UserLogoBtn>
              
          </UserLogoWrapper>
};
