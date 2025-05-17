import Navigation from '../../Header/Navigation/Navigation';
import { MobileMenuBackdrop, BurgerModalWrapper } from './BurgerModal.styled';
import { BlurStyledBar8, BlurStyledBar9, BlurStyledBar10} from '../../BlurStyledBars/BlurStyledBars.styled';

export const BurgerModal = () => {
  
  return  <MobileMenuBackdrop className="mobile-menu-backdrop">
            <BurgerModalWrapper >
                <Navigation /> 
                <BlurStyledBar8 className="blur8"/>
                <BlurStyledBar9 className="blur9"/>
                <BlurStyledBar10 className="blur10"/>
            </BurgerModalWrapper>
          </MobileMenuBackdrop>

};
