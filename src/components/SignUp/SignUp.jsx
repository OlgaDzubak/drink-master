import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSelectors';
import { signup } from '../../redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { StyledMain } from '../Welcome/Welcome.styled';
import { SignupSchema } from '../../helpers/validateForm/validate-register';
import { SkeletonRows } from '../Skeletons/SkeletonRows';
import { StyledAuthContainer, StyledTitleAuth, StyledButtonsContainer, StyledButton, FieldsInputAuthContainer } from './SignUp.styled';
import { FieldInputAuth } from './FieldInputAuth/FieldInputAuth';
import { FieldInputAuthPass } from './FieldInputAuth/FieldInputAuthPass';
import { FieldInputAuthBirthdate } from './FieldInputAuth/FieldInputAuthBirthdate';
import changeDateStr from '../../helpers/changeDateStr';
import './air-datepicker.css';


const SignUp = () => {

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    
    const birthdate = changeDateStr(values.birthdate);
    
    const newUser = { ...values, birthdate };
    dispatch(signup(newUser));
    resetForm();
  }

  const initialValues = {
    name: '',
    birthdate: '',
    email: '',
    password: '',
  };

  return  <StyledMain>
            <StyledAuthContainer>
            
              <StyledTitleAuth id="signup">Sign Up</StyledTitleAuth>
              
              <Formik

                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
              >
                {({ errors, touched, setFieldValue }) => (

                  <Form style={{ zIndex: 3, minWidth: '335px' }}>
                    {isLoading 
                      ? <SkeletonRows rows={5} heightArr={[56]}/>
                      : <>

                          <FieldsInputAuthContainer>

                            <FieldInputAuth id="name" name="name" placeholder="Name" errors={errors} touched={touched} showCheckIcon={true}/>

                            <FieldInputAuthBirthdate errors={errors} touched={touched} setFieldValue={setFieldValue}/>

                            <FieldInputAuth name="email" placeholder="Email" errors={errors} touched={touched} showCheckIcon={true}/>

                            <FieldInputAuthPass errors={errors} touched={touched} />

                          </FieldsInputAuthContainer>

                          <StyledButtonsContainer>

                            <StyledButton type="submit">Sign Up</StyledButton>

                            <Link to="/signin">
                              <StyledButton type="button">Sign In</StyledButton>
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

export default SignUp;
