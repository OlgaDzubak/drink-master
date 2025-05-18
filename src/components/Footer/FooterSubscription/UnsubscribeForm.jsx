import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { StyledSubBtn, StyledSubText, StyledSubField, StyledSubForm, StyledSubLabel, SubFormContenWrapper,} from './FooterSubscription.styled';
import { unsubscribeUser } from '../../../redux/auth/authOperations';


export const UnsubscribeForm = ({ email}) => {

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {

    await dispatch(unsubscribeUser({subscriptionEmail: values.email}));
    resetForm();
  };

  return <Formik initialValues={{email}} onSubmit={handleSubmit}> 
          {({ errors, touched }) => <StyledSubForm>

                                      <StyledSubText>You are subscribed on our newsletter.</StyledSubText>
    
                                      <SubFormContenWrapper>
                                        <StyledSubLabel htmlFor="email">Email:</StyledSubLabel>
                                        <StyledSubField type="text" id="email" name="email" placeholder="Enter the Email" autoComplete="email" disabled/>  {/* в якості email для підписки будемо використовувати email авторизації (якщо захочемо дозволити використовувати іншиу пошту то поле disabled приберемо) */}
                                      </SubFormContenWrapper>
                                      
                                      <StyledSubBtn type="submit">Cancel subscription</StyledSubBtn>
                                    </StyledSubForm>
          }
        </Formik>
};