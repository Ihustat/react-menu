import React, { useEffect, useState } from 'react';

import { getAllCategories } from '../API/api';
import { CategoriesList } from '../components/CategoriesList';
import { useApi } from '../hooks/useApi';

export function CategoriesPage() {
  const categoriesList = useApi(getAllCategories, 'categories');

  return (
    <>
      <CategoriesList categories={categoriesList} />
    </>
  );
}
