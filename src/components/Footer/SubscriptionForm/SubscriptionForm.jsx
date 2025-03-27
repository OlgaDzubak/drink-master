import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { StyledSubBtn, StyledSubError, StyledSubField, StyledSubForm, StyledSubLabel, SubFormContenWrapper,} from '../FooterSubscription/FooterSub.styled';
import { subscribeUser } from '../../../redux/auth/authOperations';
import { subscriptionSchema } from '../../../helpers/validateForm/validate-subscription';


const SubscriptionForm = () => {

  const dispatch = useDispatch();
  const initialValues = { email: ''};

  const handleSubmit = async (values, { resetForm }) => {

    await dispatch(subscribeUser({subscriptionEmail: values.email}));
    resetForm();
  };

  return  <Formik initialValues={initialValues} validationSchema={subscriptionSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => <StyledSubForm>

                                        <SubFormContenWrapper>
                                          <StyledSubLabel htmlFor="email">Email:</StyledSubLabel>
                                          <StyledSubField type="text" id="email" name="email" placeholder="Enter the Email" />
                                        </SubFormContenWrapper>
                                        
                                        { touched.email && errors.email ? <StyledSubError>{errors.email}</StyledSubError> : null }

                                        <StyledSubBtn type="submit">Subscribe</StyledSubBtn>
                                        
                                      </StyledSubForm>
            }
          </Formik>
};

export default SubscriptionForm;
