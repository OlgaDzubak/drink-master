import { useRef, useEffect } from 'react';
import { StyledModalUl, TermsModal } from '../FooterTerms.styled';
import { modalTitles, modalTexts } from '../../../../helpers/policytermscontent';


export const FooterModal = ({ isModalOpen, setIsModalOpen, modalTextKey }) => {
  
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, setIsModalOpen]);

  return  <TermsModal ref={modalRef}>

            <h3>{modalTitles[modalTextKey]}</h3>
            
            <br />
            <br />
            
            <StyledModalUl>
              { modalTexts[modalTextKey]
                                .split('\n')
                                .map((str, idx) => <li key={idx}> {str} </li>)
              }
            </StyledModalUl>
            
          </TermsModal>
};
