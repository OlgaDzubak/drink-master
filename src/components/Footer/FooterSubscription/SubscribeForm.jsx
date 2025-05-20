import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { subscribeUser } from '../../../redux/auth/authOperations';
import { selectIsLoading, selectUser, selectVerifiedForSubscription } from '../../../redux/auth/authSelectors';
import { SkeletonRows } from '../../Skeletons/SkeletonRows';
import { SubscriptionContainer, StyledSubBtn, StyledText, StyledSubField, StyledSubForm, StyledSubLabel, SubFormContenWrapper, } from './FooterSubscription.styled';

export const SubscribeForm = () => {
  
  const isLoading = useSelector(selectIsLoading);
  const { email } = useSelector(selectUser);
  const verifiedForSubscription = useSelector(selectVerifiedForSubscription);
  const dispatch = useDispatch();

  useEffect(() => {
    if (verifiedForSubscription) {
      dispatch(subscribeUser());
    }
  },[verifiedForSubscription]);

  const handleSubmit = () => {
    dispatch(subscribeUser());
  };

  return  <SubscriptionContainer>
          <StyledText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</StyledText>
    
          {isLoading
            ? <SkeletonRows rows={2} heightArr={[56, 56]} />
            : <Formik initialValues={{ email }} onSubmit={handleSubmit}>
                {({ errors, touched }) => <StyledSubForm>
                                                
                                            <SubFormContenWrapper>
                                              <StyledSubLabel htmlFor="email">Email:</StyledSubLabel>
                                              <StyledSubField type="text"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Enter the Email"
                                                              autoComplete="email"
                                                              disabled 
                                              />  {/* в якості email для підписки будемо використовувати email авторизації (якщо захочемо дозволити використовувати іншиу пошту то поле disabled приберемо) */}
                                            </SubFormContenWrapper>
                                                                                  
                                            <StyledSubBtn type="submit" aria-label='newsletter subscription'>Subscribe</StyledSubBtn>
                                            
                                          </StyledSubForm>
                }
              </Formik>
          }
          </SubscriptionContainer>
};