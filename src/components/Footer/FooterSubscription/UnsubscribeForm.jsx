import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { SubscriptionContainer, StyledSubBtn, StyledText, StyledSubField, StyledSubForm, StyledSubLabel, SubFormContenWrapper,} from './FooterSubscription.styled';
import { unsubscribeUser } from '../../../redux/auth/authOperations';
import { selectIsLoading, selectUser } from '../../../redux/auth/authSelectors';
import { SkeletonRows } from '../../Skeletons/SkeletonRows';

export const UnsubscribeForm = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {

    await dispatch(unsubscribeUser({subscriptionEmail: values.email}));
    resetForm();
  };

  return <SubscriptionContainer>
          <StyledText>You are subscribed to our newsletter.</StyledText>
              
          {isLoading
            ? <SkeletonRows rows={2} heightArr={[56, 56]} />
            : <Formik initialValues={{ email }} onSubmit={handleSubmit}>
                {({ errors, touched }) => <StyledSubForm>
                  
                  <SubFormContenWrapper>
                    <StyledSubLabel htmlFor="email">Email:</StyledSubLabel>
                    <StyledSubField type="text" id="email" name="email" placeholder="Enter the Email" autoComplete="email" disabled />  {/* в якості email для підписки будемо використовувати email авторизації (якщо захочемо дозволити використовувати іншиу пошту то поле disabled приберемо) */}
                  </SubFormContenWrapper>
                                                    
                  <StyledSubBtn type="submit" aria-label='cancel newsletter subscription'>Cancel subscription</StyledSubBtn>
                </StyledSubForm>
                }
              </Formik>
          }
          
         </SubscriptionContainer>
};