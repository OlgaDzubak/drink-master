import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { selectIsLoadingVerifyModal, selectShouldBeVerifiedForSubscription } from '../../../redux/auth/authSelectors';
import { toogleIsLoggedIn, verify, toogleIsEmailVerificationModalOpen, toogleShouldBeVerifiedForSubscription } from '../../../redux/auth/authOperations';
import { SkeletonVerify } from '../../Skeletons/SkeletonVerify';
import { emailTokenSchema } from '../../../helpers/validateForm/validate-verificationToken';
import { StyledField } from '../../SignUp/FieldInputAuth/FieldInputAuth.styled';
import { ButtonsWrapper, ModalBtn } from '../LogOutModal/LogoutModal.styled';
import { EmailVerificationWrapper, VerificationModalTitle, VerificationModalSubtitle, MessageText, Emailspan } from './EmailVerificationModal.styled';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';
import { BlurStyledBar6, BlurStyledBar7 } from '../../BlurStyledBars/BlurStyledBars.styled';


export const EmailVerificationModal = ({email, title, navigateTo}) => {
  
  const isLoading = useSelector(selectIsLoadingVerifyModal);
  const shouldBeVerifiedForSubscription = useSelector(selectShouldBeVerifiedForSubscription);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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
        
                          <Form>
                            <CloseBtn onClick={()=>dispatch(toogleIsEmailVerificationModalOpen())}>
                              <CloseIcon />
                            </CloseBtn>
                            
                            <VerificationModalTitle>{title}</VerificationModalTitle>
                            <VerificationModalSubtitle>Please confirm your email! <Emailspan>{email}</Emailspan></VerificationModalSubtitle>
                            <MessageText>We have sent a letter to your email with verification code.
                                         Enter this code to the field below and click "Verify".</MessageText>
                                          
                            <StyledField id="verificationToken"
                              name="verificationToken"
                              placeholder="Enter verification code"
                              errors={errors}
                              touched={touched}
                              autoComplete="off"
                              autoFocus
                            />
                            
                            <ButtonsWrapper>
                              <ModalBtn type="button" onClick={handleCancel}>Do it later</ModalBtn>
                              <ModalBtn type="submit">Verify</ModalBtn>
                            </ButtonsWrapper>
                          </Form>
        
                        )}
                      </Formik>
              }
              <BlurStyledBar6/>
              <BlurStyledBar7/>
            </EmailVerificationWrapper>
         </ModalBackdrop>
};