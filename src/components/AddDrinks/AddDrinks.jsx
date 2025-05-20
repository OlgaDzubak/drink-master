import { AddDrinkForm } from './AddDrinkForm/AddDrinkForm';
import { FollowUs } from './FollowUs/FollowUs';
import { TotalWrapper, AsideLinksAndPopularDrinks } from './AddDrinks.styled';
import { PopularDrinks } from './PopularDrinks/PopularDrinks';
import SectionTitle from "../Titles/SectionTitle";


const AddDrinks = () => {

  return  <TotalWrapper>
    
              <AddDrinkForm />

              <AsideLinksAndPopularDrinks aria-labelledby='aside-title'>
                <SectionTitle id="aside-title" title="socials links and popular drinks" hidden={true}></SectionTitle>
                <FollowUs />
                <PopularDrinks />
              </AsideLinksAndPopularDrinks>

          </TotalWrapper>
};

export default AddDrinks;
