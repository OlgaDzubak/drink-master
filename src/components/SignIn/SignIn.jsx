import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';

import { StyledMain } from '../Welcome/Welcome.styled';
import { StyledAuthContainer, StyledButton, StyledTitleAuth, FieldsInputAuthContainer, StyledButtonsContainer } from '../SignUp/SignUp.styled';
import { SkeletonAuth } from '../SignUp/Skeletons/SkeletonAuth';
import { signin } from '../../redux/auth/authOperations';
import { SignInSchema } from '../../helpers/validateForm/validate-login';
import { FieldInputAuth } from '../SignUp/FieldInputAuth/FieldInputAuth';
import { FieldInputAuthPass } from '../SignUp/FieldInputAuth/FieldInputAuthPass';


const SignIn = () => {

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
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
                  
                  <Form style={{ zIndex: 3 }}>

                    {isLoading 
                      ? <SkeletonAuth totalRow={3} />
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

          </StyledMain>
};

export default SignIn;
