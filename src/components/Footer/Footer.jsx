import { Logo } from '../Header/Logo/Logo';
import { FooterEl, FooterContainer, FooterContentWrapper, FooterMedia, FooterMediaNavWrapper } from './Footer.styled';
import { FooterMediaList } from './FooterMedia/FooterMediaList';
import { FooterNav } from './FooterNav/FooterNavList';
import { FooterSub } from './FooterSubscription/FooterSub';
import { FooterTerms } from './FooterTerms/FooterTerms';

const Footer = () => {
  
  return  <FooterEl>
            <FooterContainer>

              <FooterContentWrapper>

                <FooterMediaNavWrapper>

                  <FooterMedia>
                    <Logo />
                    <FooterMediaList />
                  </FooterMedia>

                  <FooterNav />

                </FooterMediaNavWrapper>
                
                <FooterSub />

              </FooterContentWrapper>

              <FooterTerms />

            </FooterContainer>
          </FooterEl>
};

export default Footer;