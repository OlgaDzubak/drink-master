import { Logo } from '../Header/Logo/Logo';
import { MediaLinksList } from '../MediaLinks/MediaLinksList';
import { FooterNav } from './FooterNav/FooterNavList';
import { FooterSubscription } from './FooterSubscription/FooterSubscription';
import { FooterTerms } from './FooterTerms/FooterTerms';
import { FooterEl, FooterContainer, FooterContentWrapper, FooterMedia, FooterMediaNavWrapper } from './Footer.styled';
import { BlurStyledBar4, BlurStyledBar5 } from '../BlurStyledBars/BlurStyledBars.styled';

const Footer = () => {
  
  return  <FooterEl>

            <FooterContainer>

              <FooterContentWrapper>

                <FooterMediaNavWrapper>

                  <FooterMedia>
                    <Logo location="footer"/>
                    <MediaLinksList location="footer"/>
                  </FooterMedia>

                  <FooterNav />

                </FooterMediaNavWrapper>
                
                <FooterSubscription />

              </FooterContentWrapper>

              <FooterTerms />

            </FooterContainer>

            <BlurStyledBar4 className="blur4"/>
            <BlurStyledBar5 className="blur5"/>

          </FooterEl>
};

export default Footer;