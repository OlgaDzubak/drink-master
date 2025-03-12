
import { Loader } from '../../Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import { CardList } from '../../Drinks/DrinksGallery/DrinksGallery.styled';
import { CardCoctali } from '../../CardCoctail/CardCoctail';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import Paginator from '../../Paginator/Paginator';

// Компонент DrinksGallery. Рендерить галерею напоїв та компонент пагінації Paginator.
const DrinksGallery = ({drinkItems, isEmpty, isLoading, onClickPaginator, pageCount}) => {

    const handlePageClick = (event) => { onClickPaginator(event.selected) };  // при натисканні кнопки пагінації повертаємо номер сторінки, на яку натиснули

    return  <>
                {
                    (!isEmpty) 
                    ?   <CardList>
                            { drinkItems.map( ({ _id, drink, drinkThumb }) => <CardCoctali _id={_id} drink={drink} drinkThumb={drinkThumb} key={_id} />) }
                        </CardList>
                    :   <ErrorPage />
                }

                { isLoading && (<Loader><ThreeDots color="#f3f3f3" width="60" /></Loader> ) }

                <Paginator pageCount={pageCount} handlePageClick={handlePageClick} />
            </>
};

export default DrinksGallery;