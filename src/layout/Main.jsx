import React, { useEffect, useState } from 'react';

import { getAllCategories } from '../API/api';
import { CategoriesList } from '../components/CategoriesList';

export function Main() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data.categories));
  }, []);

  return (
    <main className='content container'>
      <CategoriesList categories={categories} />
    </main>
  );
}
