import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../redux/drinks/favorites/favoritesOperations';
import { selectIsLoading, selectFavoriteItems } from '../redux/drinks/favorites/favoriteSelectors';
import { MyDrinks } from '../components/MyDrinks/MyDrinks';
import PageTitle from '../components/Titles/PageTitle';
import Loader  from '../components/Loader/Loader';

const FavoriteDrinksPage = () => {

  const isLoading = useSelector(selectIsLoading);
  const favoriteDrinks = useSelector(selectFavoriteItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return  <>
            <PageTitle title="Favorites" marginBottom={["40px", "60px", "60px"]} />

            { 
              isLoading
                ? <Loader/>
                : <MyDrinks location="favorite" drinks={favoriteDrinks} emptyMessage="You haven't added any favorites cocktails yet"/>
            }
          </>
  };


export default FavoriteDrinksPage;
