import { useState, useEffect } from 'react';
import { getCategories, getIngredients} from '../helpers/API/operationsFilters';
import PageTitle from '../components/Titles/PageTitle';
import Drinks from '../components/Drinks/Drinks';

  const DrinksPage = () => {

      const [categoryList, setCategoryList] = useState([]);
      const [ingredientList, setIngredientList] = useState([]);

      useEffect(() => {
        const getCategoryList = async () => {
          try {
            const data = await getCategories();
            setCategoryList(data);
          } catch (error) {
            if (error.code !== 'ERR_CANCELED') {
              console.log(error);
              throw Error('Oops! Something went wrong! Try reloading the page!');
            }
          }
        };
        getCategoryList();

        const getIngredientList = async () => {
          try {
            const data = await getIngredients();
            const titles = data.map((item) => item.title);
            setIngredientList(titles);
          } catch (error) {
            if (error.code !== 'ERR_CANCELED') {
              console.log(error);
              throw Error('Oops! Something went wrong! Try reloading the page!');
            }
          }
        };
        getIngredientList();

      }, []);

      return  <>
                <PageTitle title="Drinks" marginBottom={["40px","60px","60px"]}/>
                <Drinks categoryList={categoryList} ingredientList={ingredientList}/>
              </>
  };
// -------------------------------------------------------------------------------------------------------------------------

export default DrinksPage;
