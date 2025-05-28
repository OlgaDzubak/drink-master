import { useDispatch } from 'react-redux';
import { LoweLiner, TermsButtons, TermsWrapper, StyledPar } from './FooterTerms.styled';
import { toggleIsPolicyModalOpen, toggleIsTermsOfServiceModalOpen} from '../../../redux/modal/modalSlice';

export const FooterTerms = () => {
 
  const dispatch = useDispatch();

  return  <LoweLiner>

            <StyledPar>©2023 Drink Master. All rights reserved.</StyledPar>

            <TermsWrapper>

              <TermsButtons onClick={() => dispatch(toggleIsPolicyModalOpen())}>Privacy Policy</TermsButtons>
              <TermsButtons onClick={() => dispatch(toggleIsTermsOfServiceModalOpen())}>Terms of Service</TermsButtons>

            </TermsWrapper>

          </LoweLiner>
};