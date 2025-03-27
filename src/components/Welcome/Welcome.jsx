import { StyledMain, StyledWelcomeContainer, StyledTitle, StyledText, StyledButtonBox, StyledButton } from './Welcome.styled';
import { Link } from 'react-router-dom';

const Welcome = () => {
  
  return <StyledMain>
              <StyledWelcomeContainer>

              <StyledTitle>
                Welcome to the app!
              </StyledTitle>

              <StyledText>
                This app offers more than just a collection of recipes - it is
                designed to be your very own digital cookbook. You can easily save and
                retrieve your own recipes at any time.
              </StyledText>

              <StyledButtonBox>

                <Link to="/signup">
                  <StyledButton type="button">Sign Up</StyledButton>
                </Link>
                
                <Link to="/signin">
                  <StyledButton type="button">Sign In</StyledButton>
                </Link>

              </StyledButtonBox>

              </StyledWelcomeContainer>
          </StyledMain>
};

export default Welcome;
