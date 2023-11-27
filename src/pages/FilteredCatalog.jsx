import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByCategory } from '../API/api';

import { CatalogList } from '../components/CatalogList';
import { Preloader } from '../components/UI/preloader/Preloader';
import { Pagination } from '../components/UI/pagination/Pagination';
import { MyRadio } from '../components/UI/radio/MyRadio';

export function FilteredCatalog() {
  const { categoryName } = useParams();
  const [category, setCategory] = useState([]);
  const [showCounter, setShowCounter] = useState(0);
  const [pagesCounter, setPagesCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getMealsByCategory(categoryName).then((data) => {
      if (showCounter) {
        setPagesCounter(data.meals.length / showCounter);
        setCategory(
          data.meals.slice(
            showCounter * currentPage,
            showCounter * currentPage + showCounter
          )
        );
      } else {
        setCategory(data.meals);
      }
    });
  }, [showCounter, currentPage]);
  return (
    <>
      <MyRadio
        showCounter={showCounter}
        setShowCounter={setShowCounter}
        setCurrentPage={setCurrentPage}
      />
      {category.length === 0 ? (
        <Preloader />
      ) : (
        <CatalogList catalog={category} categoryName={categoryName} />
      )}
      {showCounter ? (
        <Pagination pages={pagesCounter} setCurrentPage={setCurrentPage} />
      ) : null}
    </>
  );
}
