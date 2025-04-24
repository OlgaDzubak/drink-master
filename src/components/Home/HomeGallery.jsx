import { useEffect, useState } from 'react';
import { useBreakPoint } from '../../hooks/useBreakPoint';
import { getCoctailsByCategories } from '../../helpers/API/operationsDrinks';
import { GallerySection, GalleryList, CategoryTitle, DrinkList, LinkDrinks } from './Home.styled';
import  SectionTitle  from '../Titles/SectionTitle';
import { DrinkCard } from '../DrinkCard/DrinkCard';

const HomeGallery = () => {

  const breakPoint = useBreakPoint();
  const [drinks, setDrinks] = useState([]);
  let per_page = 1;

  useEffect(() => { 
    const mathPerPage = () => {
      switch (breakPoint) {
        case 1280: per_page = 3; break;
        case 768: per_page = 2; break;
        case 375: per_page = 1; break;
        default: per_page = 1; break;
      }
    };
    mathPerPage();
    }, [breakPoint])
  
  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        
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
            
            <SectionTitle title='Drink gallery by categories' hidden={true}/>
    
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
