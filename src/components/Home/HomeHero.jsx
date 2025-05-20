import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { HeroSection, HeroTextDiv, HeroTitle, Text, BtnAddDrinks, GlassPictureDiv } from './Home.styled';

const HomeHero = () => {
  
  const { theme } = useContext(GlobalContext);
  
  return  <HeroSection >
              
              <HeroTextDiv>
                
                <HeroTitle>
                  Craft Your Perfect 
                  <br/> Drink with Drink Master
                </HeroTitle>

                <Text>
                  Unlock your inner mixologist with Drink Master, your one-stop
                  destination for exploring, crafting, and mastering the world´s
                  finest beverages.
                </Text>

                <BtnAddDrinks to="/add" aria-label="add drink">Add drink</BtnAddDrinks>
                
              </HeroTextDiv>
    
              <GlassPictureDiv themeName={theme}/>
                    
          </HeroSection>
};

export default HomeHero;
