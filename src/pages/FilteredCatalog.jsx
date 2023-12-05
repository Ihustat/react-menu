import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMealsByCategory } from '../API/api';

import { useSelect } from '../hooks/useSelect';

import { CatalogList } from '../components/CatalogList';

import { Preloader } from '../components/UI/preloader/Preloader';
import { Pagination } from '../components/UI/pagination/Pagination';
import { MySelect } from '../components/UI/select/MySelect';

export function FilteredCatalog() {
  const { categoryName } = useParams();

  const [category, setCategory] = useState([]);
  const [showCounter, setShowCounter] = useState('All');
  const [pagesCounter, setPagesCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const showData = useSelect();

  useEffect(() => {
    getMealsByCategory(categoryName).then((data) => {
      const { pagesCount, returnData } = showData(
        showCounter,
        currentPage,
        data.meals
      );

      setCategory(returnData);
      setPagesCounter(pagesCount);
    });
  }, [showCounter, currentPage]);

  return (
    <>
      <MySelect
        options={['All', 6, 9]}
        defaultValue='Show by'
        cb={setShowCounter}
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
