import { useDispatch } from 'react-redux';
import { toggleIsPolicyModalOpen } from '../../../redux/modal/modalSlice';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { TermsModal } from './PolicyModal.styled';
import { BlurStyledBar6, BlurStyledBar7 } from '../../BlurStyledBars/BlurStyledBars.styled';

export const PolicyModal = () => {
  
  const dispatch = useDispatch();
  
  const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        dispatch(toggleIsPolicyModalOpen());
      }
  }

  return <ModalBackdrop className="modal-backdrop" onClick={handleBackdropClick}>
            <TermsModal className='modal'>
      
              <CloseBtn onClick={() => dispatch(toggleIsPolicyModalOpen())}>
                <CloseIcon />
              </CloseBtn>
      
              <h3>Privacy Policy</h3>
              
              <br />
              <br />
                  
              <ul>
                {`Your privacy is important to us. This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.
                  What personal data do we collect: We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.
                  How we use your personal data: We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.
                  Protection of personal data: We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.
                  Disclosure to third parties: We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.
                  Changes to the Privacy Policy: We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.
                  Contact us: If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.`
                  .split('\n').map((str, idx) => <li key={idx}> {str} </li>)}
              </ul>
              
              <BlurStyledBar6/>
              <BlurStyledBar7/> 
              
            </TermsModal>
            
          </ModalBackdrop>
};
