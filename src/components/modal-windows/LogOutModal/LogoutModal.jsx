import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogoutModalOpen } from '../../../redux/modal/modalSelectors';
import { toggleIsLogoutModalOpen } from '../../../redux/modal/modalSlice';
import { selectIsLoading } from '../../../redux/auth/authSelectors';
import { signout } from '../../../redux/auth/authOperations';
import { SkeletonLogout } from '../../Skeletons/SkeletonLogout';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { LogOutWrapper,  MessageText, ButtonsWrapper, LogOutModalBtn } from './LogoutModal.styled';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';

export const LogoutModal = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(signout()); 
    dispatch(toggleIsLogoutModalOpen());
  }
  const handleCancel = () => {
    dispatch(toggleIsLogoutModalOpen());
  }

  return  <ModalBackdrop>
            <LogOutWrapper >
              { 
                isLoading 
                    ? <SkeletonLogout/>
                    : <>
                        <CloseBtn onClick={()=>dispatch(toggleIsLogoutModalOpen())}>
                          <CloseIcon />
                        </CloseBtn>

                        <MessageText>Are you sure you want to log out?</MessageText>
                        
                        <ButtonsWrapper>

                          <LogOutModalBtn onClick={handleLogout}>Log Out</LogOutModalBtn>
                          <LogOutModalBtn onClick={handleCancel}>Cancel</LogOutModalBtn>
                          
                        </ButtonsWrapper>
                      </>
                }
            </LogOutWrapper>
          </ModalBackdrop>
};