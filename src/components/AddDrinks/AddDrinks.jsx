import { AddDrinkForm } from './AddDrinkForm2/AddDrinkForm';
import { FollowUs } from './FollowUs/FollowUs';
import { TotalWrapper, AsideLinksAndPopularDrinks } from './AddDrinks.styled';
import { PopularDrinks } from './PopularDrinks/PopularDrinks';

const AddDrinks = () => {

  return <TotalWrapper>
    
              <AddDrinkForm />

              <AsideLinksAndPopularDrinks>
                <FollowUs />
                <PopularDrinks />
              </AsideLinksAndPopularDrinks>

          </TotalWrapper>
};

export default AddDrinks;
