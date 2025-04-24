import { useState, useEffect } from 'react';
import { onClickPaginator } from '../../helpers/onClickPaginator';
import NotFound from '../NotFound/NotFound';
import DrinksGallery from '../Drinks/DrinksGallery/DrinksGallery';
import Paginator from '../Paginator/Paginator';

export const MyDrinks = ({ location, drinks, emptyMessage }) => {
  
  const [totalDrinks, setTotalDrinks] = useState(drinks.length);
  const [drinkItems, setDrinkItems] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page] = useState(window.innerWidth >= 1280 ? 9 : 10);

  useEffect(() => {
    const start_number = (page - 1) * per_page;
    const end_number = start_number + per_page;
    const currentItems = drinks.slice(start_number, end_number);
    setDrinkItems(currentItems);
  }, [page, per_page]);

  const handlePageClick = ({selected}) => {
    onClickPaginator(totalDrinks, selected, per_page, setPage);
  }

	return  <>
    {
      drinks.length === 0
        ? <NotFound text={emptyMessage} />
        : <DrinksGallery location={location} drinkItems={drinkItems} />
						}
            <Paginator  pageCount={Math.ceil(totalDrinks/per_page)}  
                        handlePageClick={handlePageClick} 
            />
					</>
};

export default MyDrinks;
