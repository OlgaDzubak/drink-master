import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import { StyledMain } from '../Welcome/Welcome.styled';
import { StyledAuthContainer, StyledButton, StyledTitleAuth, FieldsInputAuthContainer, StyledButtonsContainer } from '../SignUp/SignUp.styled';
import { SkeletonRows } from '../Skeletons/SkeletonRows';
import { signin } from '../../redux/auth/authOperations';
import { SignInSchema } from '../../helpers/validateForm/validate-login';
import { FieldInputAuth } from '../SignUp/FieldInputAuth/FieldInputAuth';
import { FieldInputAuthPass } from '../SignUp/FieldInputAuth/FieldInputAuthPass';
import { EmailVerificationModal } from '../modal-windows/EmailVerificationModal/EmailVerificationModal';
import { selectIsEmailVerificationModalOpen} from '../../redux/auth/authSelectors';
import { selectUserEmail } from "../../redux/auth/authSelectors"


const SignIn = () => {

  const isLoading = useSelector(selectIsLoading);
  const isEmailVerificationModalOpen = useSelector(selectIsEmailVerificationModalOpen);
  const userEmail = useSelector(selectUserEmail);
  

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(signin(values));
    resetForm();
  }

  const initialValues = {
    email: '',
    password: '',
  };

  return  <StyledMain>
            
            <StyledAuthContainer>

              <StyledTitleAuth id="signin">Sign In</StyledTitleAuth>

              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignInSchema}
              >
                {({ errors, touched }) => (
                  
                  <Form style={{ width:"100%", zIndex: 3 }}>

                    {isLoading 
                      ? <SkeletonRows rows={3} heightArr={[56]} />
                      : <>
                          <FieldsInputAuthContainer>

                            <FieldInputAuth name="email" placeholder="Email" errors={errors} touched={touched} showCheckIcon={true}/>
                            <FieldInputAuthPass errors={errors} touched={touched} />

                          </FieldsInputAuthContainer>

                          <StyledButtonsContainer>
                            
                            <StyledButton type="submit">Sign In</StyledButton>
                            
                            <Link to="/signup">
                              <StyledButton type="button">Sign Up</StyledButton>
                            </Link>
                          
                          </StyledButtonsContainer>
                        </>
                    }

                  </Form>
                )}

              </Formik>

            </StyledAuthContainer>
    
            {isEmailVerificationModalOpen && <EmailVerificationModal email={userEmail}
                                                                      title="Authorization successful!"
                                                                      navigateTo="/" />}
    
          </StyledMain>
};

export default SignIn;
