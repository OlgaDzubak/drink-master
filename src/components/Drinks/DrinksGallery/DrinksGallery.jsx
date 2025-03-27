import { DrinkCard } from '../../DrinkCard/DrinkCard';
import { CardList } from '../../Drinks/DrinksGallery/DrinksGallery.styled';

// Компонент DrinksGallery. Рендерить галерею напоїв та компонент пагінації Paginator.
const DrinksGallery = ({location, drinkItems}) => {

  return  <CardList>
            { 
              drinkItems.map( ({ _id, drink, alcoholic, shortDescription, drinkThumb }) => 
                <DrinkCard  location={location} 
                            key={_id} 
                            _id={_id} 
                            drink={drink} 
                            alcoholic={alcoholic} 
                            shortDescription={shortDescription} 
                            drinkThumb={drinkThumb}
                /> )
            }
          </CardList>
};

export default DrinksGallery;