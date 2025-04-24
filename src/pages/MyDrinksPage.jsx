import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwn } from '../redux/drinks/own/ownOperations';
import { selectIsLoading, selectOwnItems } from '../redux/drinks/own/ownSelector';
import { MyDrinks } from '../components/MyDrinks/MyDrinks';
import PageTitle from '../components/Titles/PageTitle';
import Loader  from '../components/Loader/Loader';

const MyDrinksPage = () => {

  const isLoading = useSelector(selectIsLoading);
  const myDrinks = useSelector(selectOwnItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwn());
  }, [dispatch]);

  return  <>
            <PageTitle title="My drinks" />

            { 
              isLoading
                ? <Loader/>
                : <MyDrinks location="own" drinks={myDrinks} emptyMessage="You haven't added any of your own cocktails yet" />
            }
          </>
};

export default MyDrinksPage;
