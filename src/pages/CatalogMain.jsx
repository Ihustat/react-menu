import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories, getAllAreas } from '../API/api';
import { CatalogList } from '../components/CatalogList';

import { Search } from '../components/UI/search/Search';
import { Preloader } from '../components/UI/preloader/Preloader';
import { MySelect } from '../components/UI/select/MySelect';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { Pagination } from '../components/UI/pagination/Pagination';
import { MyRadio } from '../components/UI/radio/MyRadio';

export function CatalogMain() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [areasName, setAreasName] = useState([]);
  const [showCounter, setShowCounter] = useState(0);
  const [pagesCounter, setPagesCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { setArea, setCategory } = useContext(BreadcrumbsContext);

  function handleSearch(str) {
    setFilteredCatalog(
      catalog.filter((cat) =>
        cat.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate({
      pathname,
      search: `?search=${str}`,
    });
  }

  function fetchCountry(countryName) {
    navigate(`/country/${countryName}`);
    setArea(countryName);
    setCategory('');
  }

  useEffect(() => {
    setFilteredCatalog(
      search
        ? catalog.filter((cat) =>
            cat.strCategory
              .toLowerCase()
              .includes(search.split('=')[1].toLowerCase())
          )
        : catalog
    );
  }, [catalog, search]);

  useEffect(() => {
    getAllAreas().then((data) => setAreasName(data.meals));
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => {
      if (showCounter) {
        setPagesCounter(data.categories.length / showCounter);
        setCatalog(
          data.categories.slice(
            showCounter * currentPage,
            showCounter * currentPage + showCounter
          )
        );
      } else {
        setCatalog(data.categories);
      }
    });
  }, [showCounter, currentPage]);

  return (
    <>
      <Search cb={handleSearch} />
      <MySelect
        defaultValue={'Show meals by country'}
        options={areasName}
        cb={fetchCountry}
      />
      <MyRadio
        showCounter={showCounter}
        setShowCounter={setShowCounter}
        setCurrentPage={setCurrentPage}
      />
      {catalog.length === 0 ? (
        <Preloader />
      ) : (
        <CatalogList catalog={filteredCatalog} />
      )}
      {showCounter ? (
        <Pagination pages={pagesCounter} setCurrentPage={setCurrentPage} />
      ) : null}
    </>
  );
}
