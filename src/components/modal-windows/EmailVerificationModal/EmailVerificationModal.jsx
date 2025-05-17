import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/auth/authSelectors';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { SkeletonLogout } from '../../Skeletons/SkeletonLogout';
import { EmailVerificationWrapper, VerificationModalTitle, VerificationModalSubtitle, MessageText, Emailspan } from './EmailVerificationModal.styled';
import { ButtonsWrapper, ModalBtn } from '../LogOutModal/LogoutModal.styled';
import { Formik, Form } from 'formik';
import { StyledField } from '../../SignUp/FieldInputAuth/FieldInputAuth.styled';
import { toogleIsLoggedIn, verify } from '../../../redux/auth/authOperations';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';
import { toogleIsEmailVerificationModalOpen } from '../../../redux/auth/authOperations';
import { useNavigate, useLocation } from 'react-router-dom';

export const EmailVerificationModal = ({email, title, navigateTo}) => {
  
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(verify({ verificationToken : values.verificationToken }));
  } 
 
  const handleCancel = (e) => {
    
    dispatch(toogleIsEmailVerificationModalOpen());

    switch (location.pathname){
      case "/signin":
        dispatch(toogleIsLoggedIn());
        break;
      case "/signup":
        navigate(navigateTo)
        break;      
      default: break;
    }
  }

  return <ModalBackdrop >
            <EmailVerificationWrapper className='modal'>
              { 
                 isLoading 
                    ? <SkeletonLogout height={"44px"} />
                    : <Formik initialValues={{verificationToken: ''}} onSubmit={handleSubmit}>
                        {({ errors, touched, values }) => (
        
                          <Form style={{ zIndex: 3, minWidth: '335px' }}>
                            {isLoading 
                              ? <SkeletonRows rows={5} heightArr={[56]}/>
                              : <>
                                  <CloseBtn onClick={()=>dispatch(toogleIsEmailVerificationModalOpen())}>
                                    <CloseIcon />
                                  </CloseBtn>
                                  
                                  <VerificationModalTitle>{title}</VerificationModalTitle>
                                  <VerificationModalSubtitle>Please confirm your email! <Emailspan>{email}</Emailspan></VerificationModalSubtitle>
                                  <MessageText>We have sent you a letter to your email with verification code.
                                               Enter this code to the field and click verify button.</MessageText>
                                  <StyledField id="verificationToken" name="verificationToken" placeholder="Enter verification token"/>
                                  
                                  <ButtonsWrapper>
                                    <ModalBtn type="button" onClick={handleCancel}>Do it later</ModalBtn>
                                    <ModalBtn type="submit" autoFocus>Verify</ModalBtn>
                                  </ButtonsWrapper>
                                  
                                </>
                            }        
                          </Form>
        
                        )}
                      </Formik>
              }
            </EmailVerificationWrapper>
         </ModalBackdrop>
};