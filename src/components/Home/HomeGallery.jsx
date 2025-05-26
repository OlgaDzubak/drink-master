import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalContext";
import { getCoctailsByCategories } from '../../helpers/API/operationsDrinks';
import { GallerySection, GalleryList, CategoryTitle, DrinkList, LinkDrinks } from './Home.styled';
import SectionTitle from '../Titles/SectionTitle';
import Loader from '../Loader/Loader';
import { DrinkCard } from '../DrinkCard/DrinkCard';
import { mathPerPage } from "../../helpers/mathPerPage";


const HomeGallery = () => {
  
  const { screenBreakPoint } = useContext(GlobalContext);
  const [drinks, setDrinks] = useState([]);
  const [per_page, setPerPage] = useState(mathPerPage(screenBreakPoint));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setPerPage(mathPerPage(screenBreakPoint));
  }, [screenBreakPoint]);
    

  useEffect(() => {
    const abortCtrl = new AbortController();
    setIsLoading(true);

    const fetchDrinks = async () => {
      try {
        const data = await getCoctailsByCategories(per_page, abortCtrl);
        const drinksArr = Object.entries(data);
        setDrinks([...drinksArr]);
      } catch (error) {
        if (!abortCtrl.signal?.aborted) {
          console.error('Error fetching drinks:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchDrinks();

    return () => abortCtrl.abort();

  }, [per_page]);
  
  return  <GallerySection>
            
            <SectionTitle title='Drink gallery by categories' hidden={true}/>

            {isLoading && <Loader />}
            
						{error && <ErrorPage />}
            
            {drinks.length > 0 && <>
              <GalleryList>
                {drinks.map(([title, coctails]) =>
                  <li key={title}>

                    <CategoryTitle>{title}</CategoryTitle>

                    <DrinkList>
                      {
                        coctails.map(({ _id, drink, drinkThumb }) =>
                          <DrinkCard location="home"
                            key={_id}
                            _id={_id}
                            drink={drink}
                            drinkThumb={drinkThumb} />)
                      }
                    </DrinkList>

                  </li>)}
              </GalleryList>
            
              <LinkDrinks to={`/drinks`}>Other Drinks</LinkDrinks>
            </>}
            
          </GallerySection>
};

export default HomeGallery;
