import { useParams } from 'react-router-dom';
import { DrinkIngredientsList } from './DrinkIngredientsList/DrinkIngredientsList';
import { DrinkHero } from './DrinkHero/DrinkHero';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { getCurrentCoctail } from '../../helpers/API/operationsDrinks';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from '../Loader/Loader.styled';

const Drink = () => {
  
  const [coctailData, setCoctailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { drinkId } = useParams();

  useEffect(() => {

    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getCurrentCoctail(drinkId);
        setCoctailData(data);
      } catch (error) {
            console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

  }, [drinkId]);

  return isLoading 
          ? <Loader> <ThreeDots color="#f3f3f3" width="80"/> </Loader>
          : <>
              <DrinkHero coctailInfo={coctailData} />
              <DrinkIngredientsList coctailInfo={coctailData} />
              <RecipePreparation coctailInfo={coctailData} />
            </>;
};

export default Drink;