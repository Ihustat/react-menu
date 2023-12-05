import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { CatalogList } from '../components/CatalogList';

import { Preloader } from '../components/UI/preloader/Preloader';
import { Pagination } from '../components/UI/pagination/Pagination';
import { MySelect } from '../components/UI/select/MySelect';

import { getMealsByArea } from '../API/api';

import { useSelect } from '../hooks/useSelect';

export function CountryPage() {
  const [areaData, setAreaData] = useState([]);
  const [showCounter, setShowCounter] = useState('All');
  const [pagesCounter, setPagesCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { countryName } = useParams();

  const showData = useSelect();

  useEffect(() => {
    getMealsByArea(countryName).then((data) => {
      console.log(data.meals);
      const { pagesCount, returnData } = showData(
        showCounter,
        currentPage,
        data.meals
      );

      setAreaData(returnData);
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

      {areaData.length === 0 ? (
        <Preloader />
      ) : (
        <CatalogList catalog={areaData} categoryName={countryName} />
      )}
      {showCounter ? (
        <Pagination pages={pagesCounter} setCurrentPage={setCurrentPage} />
      ) : null}
    </>
  );
}
