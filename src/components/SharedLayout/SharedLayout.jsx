import { useContext, Suspense, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Global, css, ThemeProvider } from '@emotion/react';

import { BtnUpScroll } from '../BtnUpScroll/BtnUpScroll';
import blockScroll from '../../helpers/blockScroll';
import { BurgerModal } from '../modal-windows/BurgerModal/BurgerModal';
import { UserProfileModal } from '../modal-windows/UserProfileModal/UserProfileModal';
import { LogoutModal } from '../modal-windows/LogOutModal/LogoutModal';
import { EmailVerificationModal } from '../modal-windows/EmailVerificationModal/EmailVerificationModal';

import { selectUser, selectIsEmailVerificationModalOpen } from '../../redux/auth/authSelectors';
import { toogleIsEmailVerificationModalOpen } from '../../redux/auth/authOperations';

import { selectIsBurgerModalOpen, selectIsUserProfileModalOpen, selectIsLogoutModalOpen } from '../../redux/modal/modalSelectors';
import { toggleIsBurgerModalOpen, toggleIsUserProfileModalOpen, toggleIsLogoutModalOpen } from '../../redux/modal/modalSlice';

import { Main, Container } from './SharedLayout.styled';
import { BlurStyledBar1, BlurStyledBar2 } from '../BlurStyledBars/BlurStyledBars.styled';
import { DARK_THEME, LIGHT_THEME } from '../../theme/theme';
import { GlobalContext } from '../../context/GlobalContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';


//-------------------------------------------------------------------------------------

const SharedLayout = () => {

  const { theme: currentTheme, screenBreakPoint } = useContext(GlobalContext);
  
  const darkTheme = {...DARK_THEME};
  const lightTheme = {...LIGHT_THEME};

  const { email } = useSelector(selectUser);
  const isBurgerModalOpen = useSelector(selectIsBurgerModalOpen);
  const isUserProfileModalOpen = useSelector(selectIsUserProfileModalOpen);
  const isLogoutModalOpen = useSelector(selectIsLogoutModalOpen);
  const isEmailVerificationModalOpen = useSelector(selectIsEmailVerificationModalOpen);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (screenBreakPoint === 1280 && isBurgerModalOpen){
      dispatch(toggleIsBurgerModalOpen());
    }
  }, [screenBreakPoint]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        isBurgerModalOpen && dispatch(toggleIsBurgerModalOpen());
        isUserProfileModalOpen && dispatch(toggleIsUserProfileModalOpen());
        isLogoutModalOpen && dispatch(toggleIsLogoutModalOpen());
        isEmailVerificationModalOpen && dispatch(toogleIsEmailVerificationModalOpen());
      }
    };

    if (isBurgerModalOpen || isUserProfileModalOpen || isLogoutModalOpen || isEmailVerificationModalOpen) {
      blockScroll.disabledScroll();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      blockScroll.enabledScroll();
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBurgerModalOpen, isUserProfileModalOpen, isLogoutModalOpen, isEmailVerificationModalOpen]);

  let theme;
  switch (currentTheme) {
    case "dark": 
                theme = darkTheme;
                break;
    case "light":
                theme = lightTheme;
                break;
    default:
                theme = darkTheme;
  }

  return  <ThemeProvider theme={theme}>
            
            <Global styles={css`body {
                                        background-color:${theme.mainBackground};
                                        color: ${theme.mainTextColor};
                                      }`
                           }
            />

            <Header />

            <Main >
              <Container className="container">

                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>

              </Container>
            </Main>

            <Footer />

            <BlurStyledBar1 className="blur1"/>
            <BlurStyledBar2 className="blur2"/>
            
            <BtnUpScroll/>
            
            { isBurgerModalOpen && <BurgerModal /> }
            { isUserProfileModalOpen && <UserProfileModal /> }
            { isLogoutModalOpen && <LogoutModal /> }
            { isEmailVerificationModalOpen && <EmailVerificationModal email={email} title="Verify your email before subscribing!" navigateTo="/" />}
    
          </ThemeProvider>
};

export default SharedLayout;
