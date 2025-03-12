import { Main, Container, StyledBlock, StyledBlockTwo } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  
  return  <>
            <Header />

            <Main>
              <Container>

                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>

              </Container>
            </Main>

            <Footer />
          </>
};

export default SharedLayout;
