import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwn } from '../redux/drinks/own/ownOperations';
import { selectError, selectOwnItems } from '../redux/drinks/own/ownSelector';
import ErrorPage from './ErrorPage/ErrorPage';
import Paginator from '../components/Paginator/Paginator';
import PageTitle from '../components/DefaultComponents/PageTitle/PageTitle';
import DrinksListOwn from '../components/DrinksList/DrinksListOwn';
import useItemsPerPage from '../hooks/useItemsPerPage';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectOwnItems);
  const error = useSelector(selectError);

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    dispatch(fetchOwn());
  }, [dispatch]);

  // Pagination
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = drinks.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(drinks.length / itemsPerPage);
    setCurrentItems(currentItems);
    setPageCount(pageCount);
  }, [itemOffset, itemsPerPage, drinks]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % drinks.length;
    setItemOffset(newOffset);
  };

  return  <>
            <PageTitle title="My drinks" />
            <DrinksListOwn drinks={currentItems} />
            <Paginator handlePageClick={handlePageClick} />
            {error && <ErrorPage />}
          </>
};

export default MyDrinksPage;
