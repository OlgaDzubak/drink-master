import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { selectIsLoading, selectShouldBeVerifiedForSubscription } from '../../../redux/auth/authSelectors';
import { toogleIsLoggedIn, verify, toogleIsEmailVerificationModalOpen, toogleShouldBeVerifiedForSubscription } from '../../../redux/auth/authOperations';

import { SkeletonVerify } from '../../Skeletons/SkeletonVerify';
import { emailTokenSchema } from '../../../helpers/validateForm/validate-verificationToken';
import { disableTab, enableTab } from '../../../helpers/blockTab';

import { StyledField } from '../../SignUp/FieldInputAuth/FieldInputAuth.styled';
import { ButtonsWrapper, ModalBtn } from '../LogOutModal/LogoutModal.styled';
import { EmailVerificationWrapper, VerificationModalTitle, VerificationModalSubtitle, MessageText, Emailspan } from './EmailVerificationModal.styled';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';

export const EmailVerificationModal = ({email, title, navigateTo}) => {
  
  const isLoading = useSelector(selectIsLoading);
  const shouldBeVerifiedForSubscription = useSelector(selectShouldBeVerifiedForSubscription);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    disableTab();
    return () => {
      enableTab();
    }
  }, []);
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(verify({ verificationToken: values.verificationToken.trim() }));
  } 
 
  const handleCancel = (e) => {

    dispatch(toogleIsEmailVerificationModalOpen());

    if (shouldBeVerifiedForSubscription) {
      dispatch(toogleShouldBeVerifiedForSubscription());
    }

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

  const handleBackdropClick = (e) => {
    if (shouldBeVerifiedForSubscription && (e.target === e.currentTarget)) {
      handleCancel();
    }
  }

  return <ModalBackdrop className="modal-backdrop" onClick={handleBackdropClick}>
            <EmailVerificationWrapper className='modal'>
              { 
                 isLoading 
                    ? <SkeletonVerify/>
                    : <Formik initialValues={{verificationToken: ''}} onSubmit={handleSubmit} validationSchema={emailTokenSchema}>
                        {({ errors, touched, values }) => (
        
                          <Form style={{ zIndex: 3, minWidth: '335px' }}>
                            <CloseBtn onClick={()=>dispatch(toogleIsEmailVerificationModalOpen())}>
                              <CloseIcon />
                            </CloseBtn>
                            
                            <VerificationModalTitle>{title}</VerificationModalTitle>
                            <VerificationModalSubtitle>Please confirm your email! <Emailspan>{email}</Emailspan></VerificationModalSubtitle>
                            <MessageText>We have sent you a letter to your email with verification code.
                                          Enter this code to the field below and click "Verify".</MessageText>
                            <StyledField id="verificationToken" name="verificationToken" placeholder="Enter verification code" errors={errors} touched={touched} autocomplete="off"/>
                            
                            <ButtonsWrapper>
                              <ModalBtn type="button" onClick={handleCancel}>Do it later</ModalBtn>
                              <ModalBtn type="submit" autoFocus>Verify</ModalBtn>
                            </ButtonsWrapper>
                          </Form>
        
                        )}
                      </Formik>
              }
            </EmailVerificationWrapper>
         </ModalBackdrop>
};