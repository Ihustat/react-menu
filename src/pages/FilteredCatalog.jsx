import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByCategory } from '../API/api';

import { CatalogList } from '../components/CatalogList';
import { Preloader } from '../components/UI/preloader/Preloader';

export function FilteredCatalog() {
  const { categoryName } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getMealsByCategory(categoryName).then((data) => setCategory(data.meals));
  }, []);
  return (
    <>
      {category.length === 0 ? (
        <Preloader />
      ) : (
        <CatalogList catalog={category} categoryName={categoryName} />
      )}
    </>
  );
}
