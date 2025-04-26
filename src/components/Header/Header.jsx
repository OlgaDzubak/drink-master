import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectIsBurgerModalOpen } from '../../redux/modal/modalSelectors';
import { GlobalContext } from "../../context/GlobalContext";
import { Logo } from './Logo/Logo';
import { UserLogo } from './UserLogo/UserLogo';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwiеcher';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import Navigation from './Navigation/Navigation';
import { HeaderEl, HeaderContainer, UserLogoAndBurger, ThemeAndUserLogo } from './Header.styled';


const Header = () => {
  
  const isBurgerModalOpen = useSelector(selectIsBurgerModalOpen); 
  const { screenBreakPoint } = useContext(GlobalContext);

  return  <HeaderEl>
            <HeaderContainer>

              <Logo />

              {screenBreakPoint === 1280 && <Navigation />}
              
              <UserLogoAndBurger>

                <ThemeAndUserLogo>

                  { (screenBreakPoint === 1280 || isBurgerModalOpen)  && <ThemeSwitcher/> }
                  { !isBurgerModalOpen && <UserLogo />}

                </ThemeAndUserLogo>

                {screenBreakPoint < 1280 && <BurgerBtn />}

              </UserLogoAndBurger>

            </HeaderContainer>
          </HeaderEl>
};

export default Header;
