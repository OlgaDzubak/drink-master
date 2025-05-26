import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectUser, selectIsEmailVerificationModalOpen} from '../../redux/auth/authSelectors';
import { signin } from '../../redux/auth/authOperations';
import { SignInSchema } from '../../helpers/validateForm/validate-login';
import { SkeletonRows } from '../Skeletons/SkeletonRows';
import { FieldInputAuth } from '../SignUp/FieldInputAuth/FieldInputAuth';
import { FieldInputAuthPass } from '../SignUp/FieldInputAuth/FieldInputAuthPass';
import { EmailVerificationModal } from '../modal-windows/EmailVerificationModal/EmailVerificationModal';
import { StyledMain } from '../Welcome/Welcome.styled';
import { StyledAuthContainer, StyledLink, StyledButton, StyledTitleAuth, FieldsInputAuthContainer, StyledButtonsContainer } from '../SignUp/SignUp.styled';


const SignIn = () => {

  const isLoading = useSelector(selectIsLoading);
  const isEmailVerificationModalOpen = useSelector(selectIsEmailVerificationModalOpen);
  const { email } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(signin(values));
    //resetForm();
  }

  const initialValues = {
    email: '',
    password: '',
  };

  return  <StyledMain>
            <section aria-labelledby='signin'>
              
              <StyledAuthContainer aria-labelledby='signin'>

                <StyledTitleAuth id="signin">Sign In</StyledTitleAuth>

                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignInSchema}>
                  {({ errors, touched }) => (
                    
                    <Form style={{ width:"100%", zIndex: 3 }}>

                      {isLoading 
                        ? <SkeletonRows rows={3} heightArr={[56]} />
                        : <>
                            <FieldsInputAuthContainer>

                              <FieldInputAuth name="email" placeholder="Email" errors={errors} touched={touched} showCheckIcon={true} ariaLabel="email"/>
                              <FieldInputAuthPass errors={errors} touched={touched} ariaLabel="password"/>

                            </FieldsInputAuthContainer>

                            <StyledButtonsContainer>
                              
                              <StyledButton type="submit" aria-label="sign in">Sign In</StyledButton>
                              <StyledLink to="/signup" aria-label="sign up">Sign Up</StyledLink>
                            
                            </StyledButtonsContainer>
                          </>
                      }

                    </Form>
                  )}
                </Formik>

              </StyledAuthContainer>
      
              {isEmailVerificationModalOpen && <EmailVerificationModal email={email} title="Authorization successful!" navigateTo="/" />}
            </section>
          </StyledMain>
};

export default SignIn;
