import { useState, useEffect } from 'react';

// Хук для определения itemsPerPage в зависимости от ширины экрана
function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1438) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(9);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemsPerPage;
}

export default useItemsPerPage;
