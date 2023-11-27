import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories, getAllAreas } from '../API/api';
import { CatalogList } from '../components/CatalogList';

import { Search } from '../components/UI/search/Search';
import { Preloader } from '../components/UI/preloader/Preloader';
import { MyButton } from '../components/UI/button/MyButton';
import { MySelect } from '../components/UI/select/MySelect';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';

export function CatalogMain() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [areasName, setAreasName] = useState([]);

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

  function fetchCountry(countryName) {
    navigate(`/country/${countryName}`);
    setArea(countryName);
    setCategory('');
  }

  useEffect(() => {
    getAllCategories().then((data) => setCatalog(data.categories));
    getAllAreas().then((data) => setAreasName(data.meals));
  }, []);

  return (
    <>
      <Search cb={handleSearch} />
      <MySelect
        defaultValue={'Show meals by country'}
        options={areasName}
        cb={fetchCountry}
      />
      {catalog.length === 0 ? (
        <Preloader />
      ) : (
        <CatalogList catalog={filteredCatalog} />
      )}
    </>
  );
}
