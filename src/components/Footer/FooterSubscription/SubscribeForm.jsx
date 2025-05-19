import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { SubscriptionContainer, StyledSubBtn, StyledText, StyledSubField, StyledSubForm, StyledSubLabel, SubFormContenWrapper,} from './FooterSubscription.styled';
import { subscribeUser } from '../../../redux/auth/authOperations';
import { selectIsLoading, selectUser, selectShouldBeVerifiedForSubscription } from '../../../redux/auth/authSelectors';
import { SkeletonRows } from '../../Skeletons/SkeletonRows';
import { useEffect } from 'react';

export const SubscribeForm = () => {

  const verifiedForSubscription = useSelector(selectShouldBeVerifiedForSubscription);
  const isLoading = useSelector(selectIsLoading);
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (verifiedForSubscription) { 
      dispatch(subscribeUser());      
    };
    
  },[verifiedForSubscription]);
  
  const handleSubmit = async () => {
    await dispatch(subscribeUser());
  };

  return  <SubscriptionContainer>
          <StyledText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</StyledText>
    
          {isLoading
            ? <SkeletonRows rows={2} heightArr={[56, 56]} />
            : <Formik initialValues={{ email }} onSubmit={handleSubmit}>
                {({ errors, touched }) => <StyledSubForm>
                                                
                                            <SubFormContenWrapper>
                                              <StyledSubLabel htmlFor="email">Email:</StyledSubLabel>
                                              <StyledSubField type="text" id="email" name="email" placeholder="Enter the Email" autoComplete="email" disabled />  {/* в якості email для підписки будемо використовувати email авторизації (якщо захочемо дозволити використовувати іншиу пошту то поле disabled приберемо) */}
                                            </SubFormContenWrapper>
                                                                                  
                                            <StyledSubBtn type="submit">Subscribe</StyledSubBtn>
                                            
                                          </StyledSubForm>
                }
              </Formik>
          }
          </SubscriptionContainer>
};