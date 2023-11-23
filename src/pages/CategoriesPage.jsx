import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../API/api';
import { CategoriesList } from '../components/CategoriesList';
import { useApi } from '../hooks/useApi';
import { Search } from '../components/UI/search/Search';
import { Preloader } from '../components/UI/preloader/Preloader';

export function CategoriesPage() {
  const categoriesList = useApi(getAllCategories, 'categories');
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  function handleSearch(str) {
    setFilteredCatalog(
      categoriesList.filter((cat) =>
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
        ? categoriesList.filter((cat) =>
            cat.strCategory
              .toLowerCase()
              .includes(search.split('=')[1].toLowerCase())
          )
        : categoriesList
    );
  }, [categoriesList, search]);

  return (
    <>
      <Search cb={handleSearch} />
      {categoriesList.length === 0 ? (
        <Preloader />
      ) : (
        <CategoriesList categories={filteredCatalog} />
      )}
    </>
  );
}
