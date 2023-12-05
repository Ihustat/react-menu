import { useEffect, useState } from 'react';
import { CatalogList } from '../components/CatalogList';
import { Preloader } from '../components/UI/preloader/Preloader';
import { getMealsByArea } from '../API/api';
import { useParams } from 'react-router-dom';
import { Pagination } from '../components/UI/pagination/Pagination';

export function CountryPage() {
  const [areaData, setAreaData] = useState([]);
  const [showCounter, setShowCounter] = useState(0);
  const [pagesCounter, setPagesCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { countryName } = useParams();

  useEffect(() => {
    getMealsByArea(countryName).then((data) => {
      if (showCounter) {
        setPagesCounter(data.meals.length / showCounter);
        setAreaData(
          data.meals.slice(
            showCounter * currentPage,
            showCounter * currentPage + showCounter
          )
        );
      } else {
        setAreaData(data.meals);
      }
    });
  }, [showCounter, currentPage]);

  return (
    <>
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
