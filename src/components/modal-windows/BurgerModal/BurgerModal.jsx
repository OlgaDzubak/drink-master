import Navigation from '../../Header/Navigation/Navigation';
import { MobileMenuBackdrop, BurgerModalWrapper } from './BurgerModal.styled';
import { BlurStyledBar8, BlurStyledBar9, BlurStyledBar10} from '../../BlurStyledBars/BlurStyledBars.styled';

export const BurgerModal = () => {


  return  <MobileMenuBackdrop>
            <BurgerModalWrapper >
                <Navigation /> 
                <BlurStyledBar8/>
                <BlurStyledBar9/>
                <BlurStyledBar10/>
            </BurgerModalWrapper>
          </MobileMenuBackdrop>

};
