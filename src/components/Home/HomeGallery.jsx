import { useEffect, useState } from 'react';
import { getCoctailsByCategories } from '../../helpers/API/operationsDrinks';
import { GallerySection, GalleryList, CategoryTitle, DrinkList, LinkDrinks } from './Home.styled';
import { DrinkCard } from '../DrinkCard/DrinkCard';

const HomeGallery = () => {
  
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const per_page = window.innerWidth >= 1280 ? 3 : (window.innerWidth >= 768 ? 2 : 1)
        const data = await getCoctailsByCategories(per_page);
        const drinksArr = Object.entries(data);
        setDrinks([...drinksArr]);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return  <GallerySection>

            <GalleryList>
              {drinks.map( ([title, coctails]) => 
                <li key={title}>

                    <CategoryTitle>{title}</CategoryTitle>

                    <DrinkList>
                      { 
                          coctails.map(({ _id, drink, drinkThumb }) => 
                              <DrinkCard  location="home" 
                                          key={_id} 
                                          _id={_id} 
                                          drink={drink} 
                                          drinkThumb={drinkThumb} />)
                      }
                    </DrinkList>

                </li>)}
            </GalleryList>
            
            <LinkDrinks to={`/drinks`}>
              Other Drinks
            </LinkDrinks>

          </GallerySection>
};

export default HomeGallery;
