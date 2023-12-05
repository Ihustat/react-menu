import { getAllCategories, getAllAreas } from '../API/api';
import { useEffect } from 'react';

export function useSelect(
  setCatalog,
  showCounter,
  setPagesCounter,
  currentPage
) {
  useEffect(() => {
    getAllCategories().then((data) => {
      if (showCounter !== 'All') {
        setPagesCounter(data.categories.length / showCounter);
        setCatalog(
          data.categories.slice(
            showCounter * currentPage,
            showCounter * currentPage + showCounter
          )
        );
      } else {
        setCatalog(data.categories);
        setPagesCounter(0);
      }
    });
  }, [showCounter, currentPage]);
}
