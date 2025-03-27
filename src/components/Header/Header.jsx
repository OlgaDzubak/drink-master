import { useSelector } from 'react-redux';
import { useScreen } from '../../hooks/useScreen';
import { selectIsBurgerModalOpen } from '../../redux/modal/modalSelectors';
import { Logo } from './Logo/Logo';
import { UserLogo } from './UserLogo/UserLogo';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwiеcher';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import Navigation from './Navigation/Navigation';
import { HeaderEl, HeaderContainer, UserLogoAndBurger, ThemeAndUserLogo } from './Header.styled';


const Header = () => {
  
  const isBurgerModalOpen = useSelector(selectIsBurgerModalOpen); 
  const { width }= useScreen();

  return  <HeaderEl>
            <HeaderContainer>

              <Logo />

              {width >= 1280 && <Navigation />}
              
              <UserLogoAndBurger>

                <ThemeAndUserLogo>

                  { (width >= 1280 || isBurgerModalOpen)  && <ThemeSwitcher/> }
                  { !isBurgerModalOpen && <UserLogo />}

                </ThemeAndUserLogo>

                {width < 1280 && <BurgerBtn />}

              </UserLogoAndBurger>

            </HeaderContainer>
          </HeaderEl>
};

export default Header;
