import { useDispatch } from 'react-redux';
import { toggleIsTermsOfServiceModalOpen } from '../../../redux/modal/modalSlice';
import { CloseBtn, CloseIcon } from '../UserProfileModal/UserProfileModal.styled';
import { ModalBackdrop } from '../../SharedLayout/SharedLayout.styled';
import { TermsModal } from './PolicyModal.styled';
import { BlurStyledBar6, BlurStyledBar7 } from '../../BlurStyledBars/BlurStyledBars.styled';


export const TermsOfServiceModal = () => {
  
    const dispatch = useDispatch();
  
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        dispatch(toggleIsTermsOfServiceModalOpen());
      }
  }
  
  return  <ModalBackdrop  className="modal-backdrop" onClick={handleBackdropClick}>
            <TermsModal className='modal'>
              
              <CloseBtn onClick={() => dispatch(toggleIsTermsOfServiceModalOpen())}>
                <CloseIcon />
              </CloseBtn>

              <h3>Terms of Service</h3>
              
              <br />
              <br />
                  
              <ul>
                {`This "User Agreement" (the "Agreement") sets forth the terms and conditions governing the use of the Drink Master application ("App") and its services.
                  Acceptance of Terms: By accessing or using the Drink Master app, you agree to comply with and be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, you should immediately discontinue the use of the App.
                  App Features and Services: The Drink Master app provides users with access to a collection of cocktail recipes, both curated and user-generated. Users can explore, search, and create their own cocktail recipes using the provided tools.
                  User Accounts and Content: To fully utilize the App's features, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and any content you submit, including your own cocktail recipes. You retain ownership of your content, but by submitting, you grant the App a non-exclusive, royalty-free license to use, modify, and distribute your content within the App.
                  Intellectual Property: All content provided by the Cocktail Creations app, including cocktail recipes, images, and text, are protected by copyright and other intellectual property laws. Users may not reproduce, distribute, or use these materials for commercial purposes without explicit permission from the App's operators.
                  User-Generated Content Guidelines: When creating and sharing user-generated cocktail recipes, you agree not to submit content that is offensive, unlawful, infringing, or harmful. The App reserves the right to remove or moderate user-generated content that violates these guidelines.
                  App Updates and Changes: The features and functionality of the Drink Master app may evolve over time. The App reserves the right to modify, update, or discontinue any aspect of the App without prior notice.
                  Disclaimer of Liability: While we strive to provide accurate and reliable information, the Drink Master app does not warrant the accuracy, completeness, or reliability of the content provided. Users acknowledge that cocktail recipes involve the use of alcohol and potentially hazardous ingredients and should exercise caution when using the recipes. The App's liability is limited to the extent permitted by applicable law.
                  Governing Law and Dispute Resolution: This Agreement shall be governed by the laws of [Country/State]. Any disputes arising from or related to this Agreement or the use of the App shall be subject to the exclusive jurisdiction of the courts in [City, Country/State].
                  By accessing or using the Drink Master app, you acknowledge that you have read, understood, and agreed to be bound by this User Agreement. If you do not agree to these terms, you must cease using the App immediately.`
                  .split('\n').map((str, idx) => <li key={idx}> {str} </li>)}
              </ul>
                      
              <BlurStyledBar6/>
              <BlurStyledBar7/>
              
            </TermsModal>
          </ModalBackdrop>
};
