import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAllCategories } from '../API/api';

import { CatalogList } from '../components/CatalogList';
import { MySelect } from '../components/UI/select/MySelect';

import { Search } from '../components/UI/search/Search';
import { Preloader } from '../components/UI/preloader/Preloader';

import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { Pagination } from '../components/UI/pagination/Pagination';

import { useSelect } from '../hooks/useSelect';
import { useSearch } from '../hooks/useSearch';

export function CatalogMain() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [showCounter, setShowCounter] = useState('All');
  const [pagesCounter, setPagesCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { setArea, setCategory } = useContext(BreadcrumbsContext);

  const { handleSearch, createFilteredCatalog } = useSearch(
    setFilteredCatalog,
    catalog,
    navigate,
    pathname,
    search
  );
  const showData = useSelect();

  function fetchCountry(countryName) {
    navigate(`/country/${countryName}`);
    setArea(countryName);
    setCategory('');
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      const { pagesCount, returnData } = showData(
        showCounter,
        currentPage,
        data.categories
      );

      setCatalog(returnData);
      setPagesCounter(pagesCount);
    });
  }, [showCounter, currentPage]);

  useEffect(() => {
    setFilteredCatalog(createFilteredCatalog());
  }, [catalog, search]);

  return (
    <>
      <Search cb={handleSearch} />
      <MySelect
        options={['All', 6, 9]}
        defaultValue='Show by'
        cb={setShowCounter}
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
