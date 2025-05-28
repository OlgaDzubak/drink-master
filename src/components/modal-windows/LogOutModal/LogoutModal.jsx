import { useDispatch, useSelector } from 'react-redux';
import { toggleIsLogoutModalOpen } from '../../../redux/modal/modalSlice';
import { selectIsLoading } from '../../../redux/auth/authSelectors';
import { signout } from '../../../redux/auth/authOperations';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { LogOutWrapper,  MessageText, ButtonsWrapper, ModalBtn } from './LogoutModal.styled';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';
import { SkeletonLogout } from '../../Skeletons/SkeletonLogout';
import { BlurStyledBar6 } from '../../BlurStyledBars/BlurStyledBars.styled';

export const LogoutModal = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(signout()); 
    dispatch(toggleIsLogoutModalOpen());
  }
  const handleCancel = (e) => {
      dispatch(toggleIsLogoutModalOpen());
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  }
  
  return <ModalBackdrop  className="modal-backdrop" onClick={handleBackdropClick}>
            <LogOutWrapper className='modal'>
              { 
                 isLoading 
                    ? <SkeletonLogout height={"44px"} />
                    : <>
                        <CloseBtn onClick={()=>dispatch(toggleIsLogoutModalOpen())}>
                          <CloseIcon />
                        </CloseBtn>

                        <MessageText>Are you sure you want to log out?</MessageText>
                        
                        <ButtonsWrapper>

                          <ModalBtn onClick={handleLogout}>Log Out</ModalBtn>
                          <ModalBtn onClick={handleCancel} autoFocus>Cancel</ModalBtn>
                          
                        </ButtonsWrapper>
                      </>
              }
                <BlurStyledBar6/>
            </LogOutWrapper>
         </ModalBackdrop>
};