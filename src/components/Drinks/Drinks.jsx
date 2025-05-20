import { useState, useEffect, useContext, lazy } from 'react';
import { GlobalContext } from "../../context/GlobalContext";
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
	const { screenBreakPoint } = useContext(GlobalContext);
	const [keyword, setKeyword] = useState("");
	const [category, setCategory] = useState("");
	const [ingredient, setIngredient] = useState("");
	const [drinkItems, setDrinkItems] = useState([]);
	const [totalDrinks, setTotalDrinks] = useState(0);
	const [page, setPage] = useState(1);
	const [per_page, setPerPage] = useState(10);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isEmpty, setIsEmpty] = useState(false);

	useEffect(() => { 
		const mathPerPage = (bp) => {
			if (bp === 1280) { return 9 }
			else {return 10 }
		}
		setPerPage(mathPerPage(screenBreakPoint));
	},[screenBreakPoint])

	useEffect(() => {

		const abortCtrl = new AbortController();
		setIsLoading(true);
		setIsEmpty(false);
		setDrinkItems([]);

		const getPopularDrinks = async (keyword = '', category = '', ingredient = '', page = 1, per_page) => {
			try {
				const { drinks, totalResults } = await getCoctailsByFilter(keyword, category, ingredient, page, per_page, abortCtrl);
				if (drinks.length === 0) {
					setIsEmpty(true);
				}
				setTotalDrinks(totalResults);
				setDrinkItems(drinks);
			} catch (error) {
				if (!abortCtrl.signal?.aborted) {
					if (error.code !== 'ERR_CANCELED') {
						setError(error);
						throw Error('Oops! Something went wrong! Try reloading the page!');
					}
				}				
			} finally {
				setIsLoading(false);
			}
		};
		getPopularDrinks(keyword, category, ingredient, page, per_page);
		
		return () => abortCtrl.abort();

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
		
		  			{isLoading && <Loader />}
						{error && <ErrorPage />}
						{isEmpty && <NotFound text="Not found!" />}
						{drinkItems.length > 0 && <DrinksGallery location="drinks" drinkItems={drinkItems} />}
						<Paginator pageCount={Math.ceil(totalDrinks/per_page)} handlePageClick={handlePageClick} />
					</DrinksContainer>
};


export default Drinks;
