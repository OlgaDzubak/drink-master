export const onClickPaginator = (totalDrinks, pageNumber, per_page, setPage) => {
  if (pageNumber < Math.ceil(totalDrinks/per_page)) {
      setPage(pageNumber+1);
  }  
};