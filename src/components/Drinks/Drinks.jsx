import { useState, useEffect } from 'react';
import { useBreakPoint } from '../../hooks/useBreakPoint';
import { getCoctailsByFilter } from '../../helpers/API/operationsDrinks';
import { onClickPaginator } from '../../helpers/onClickPaginator';
import NotFound from '../NotFound/NotFound';
import Loader from '../Loader/Loader';
import Filter from './Filter/Filter';
import DrinksGallery from './DrinksGallery/DrinksGallery';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Paginator from '../Paginator/Paginator';
import { DrinksContainer } from './Drinks.styled';

// Компонент Drinks: рендерить компоненти Filter, DrinksGallery -------------------------------------------------------------
const Drinks = ({categoryList, ingredientList}) => {
	const breakPoint = useBreakPoint();
	const [keyword, setKeyword] = useState("");
	const [category, setCategory] = useState("");
	const [ingredient, setIngredient] = useState("");
	const [drinkItems, setDrinkItems] = useState([]);
	const [totalDrinks, setTotalDrinks] = useState(0);
	const [page, setPage] = useState(1);
	const [per_page, setPerPage] = useState(10);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	
	useEffect(() => { 
		const mathPerPage = () => {
			if (breakPoint === 1280) { setPerPage(9) }
			else { setPerPage(10) }
		}
		mathPerPage();

	},[breakPoint])

	useEffect(() => {
		
		//Запит на сервер для отримання списку напоїв по фільтрам зі стану.
		const getPopularDrinks = async (keyword = '', category = '',ingredient = '', page = 1, per_page ) => {
			
			try {
				setIsLoading(true);
				const { drinks, totalResults } = await getCoctailsByFilter(keyword, category, ingredient, page, per_page);
				setTotalDrinks(totalResults);
				setDrinkItems(drinks);
			} catch (error) {
				if (error.code !== 'ERR_CANCELED') {
					setError(error);
					throw Error('Oops! Something went wrong! Try reloading the page!');
				}
			} finally {
				setIsLoading(false);
			}
		};
		getPopularDrinks(keyword, category, ingredient, page, per_page);

	}, [keyword, category, ingredient, page, per_page ]);
	

	const onChangeFilter = (label, value='') => {

		switch (label) {
			case 'keyword': 
					setKeyword(value); 
					setPage(1);
					break;
			case 'category': 
					setCategory(value);
					setPage(1);
					break;
			case 'ingredient': 
					setIngredient(value);
					setPage(1);
					break;
			default: 
					break;
		}
	};
	
  const handlePageClick = ({selected}) => {
    onClickPaginator(totalDrinks, selected, per_page, setPage);
  }

	return  <DrinksContainer>
						<Filter 
							categoryList={categoryList} 
							ingredientList={ingredientList} 
							onChangeFilter={onChangeFilter}
						/>

						{
							isLoading 
								? <Loader/> 
								: error 
									?	<ErrorPage />
									: drinkItems.length === 0 
											? <NotFound text="Not found!" />
											: <DrinksGallery	location="drinks" drinkItems={drinkItems} />
						}

						<Paginator 	pageCount={Math.ceil(totalDrinks/per_page)} 
												handlePageClick={handlePageClick}
						/>

					</DrinksContainer>
};


export default Drinks;
