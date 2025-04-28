import React, { useContext, Suspense, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Global, css, ThemeProvider } from '@emotion/react';

import { BtnUpScroll } from '../BtnUpScroll/BtnUpScroll';
import blockScroll from '../../helpers/blockScroll';
import { BurgerModal } from '../modal-windows/BurgerModal/BurgerModal';
import { UserProfileModal } from '../modal-windows/UserProfileModal/UserProfileModal';
import { LogoutModal } from '../modal-windows/LogOutModal/LogoutModal';


import { selectIsBurgerModalOpen, selectIsUserProfileModalOpen, selectIsLogoutModalOpen} from '../../redux/modal/modalSelectors';
import { toggleIsBurgerModalOpen, toggleIsUserProfileModalOpen, toggleIsLogoutModalOpen} from '../../redux/modal/modalSlice';

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

  const isBurgerModalOpen = useSelector(selectIsBurgerModalOpen);
  const isUserProfileModalOpen = useSelector(selectIsUserProfileModalOpen);
  const isLogoutModalOpen = useSelector(selectIsLogoutModalOpen);

  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        isBurgerModalOpen && dispatch(toggleIsBurgerModalOpen());
        isUserProfileModalOpen && dispatch(toggleIsUserProfileModalOpen());
        isLogoutModalOpen && dispatch(toggleIsLogoutModalOpen());
      }
    };

    if (isBurgerModalOpen || isUserProfileModalOpen || isLogoutModalOpen) {
      blockScroll.disabledScroll();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      blockScroll.enabledScroll();
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBurgerModalOpen, isUserProfileModalOpen, isLogoutModalOpen]);

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

          </ThemeProvider>
};

export default SharedLayout;
