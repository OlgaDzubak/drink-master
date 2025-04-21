import { AddDrinkForm } from './AddDrinkForm2/AddDrinkForm';
import { FollowUs } from './FollowUs/FollowUs';
import { PopularDrink } from './PopularDrink/PopularDrink';
import { TotalWrapper, AsideLinksAndPopularDrinks } from './AddDrinks.styled';

const AddDrinks = () => {

  return <TotalWrapper>
    
              <AddDrinkForm />

              <AsideLinksAndPopularDrinks>
                <FollowUs />
                <PopularDrink />
              </AsideLinksAndPopularDrinks>

          </TotalWrapper>
};

export default AddDrinks;
