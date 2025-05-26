import { StyledMain, StyledWelcomeContainer, StyledTitle, StyledText, StyledLinksBox, StyledLink } from './Welcome.styled';
// import { Link } from 'react-router-dom';

const Welcome = () => {
  
  return <StyledMain>
              <section aria-labelledby="welcome-page-title">
                
                <StyledWelcomeContainer>
        
                  <StyledTitle id="welcome-page-title">Welcome to the app!</StyledTitle>

                  <StyledText>
                    This app offers more than just a collection of recipes - it is
                    designed to be your very own digital cookbook. You can easily save and
                    retrieve your own recipes at any time.
                  </StyledText>

                  <StyledLinksBox>

                    <StyledLink to="/signup" aria-label='sign up'>Sign Up</StyledLink>
                    <StyledLink to="/signin" aria-label='sign in'>Sign In</StyledLink>

                  </StyledLinksBox>
                  
                </StyledWelcomeContainer>
                
              </section>
          </StyledMain>
};

export default Welcome;
