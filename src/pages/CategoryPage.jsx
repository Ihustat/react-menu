import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealsByCategory } from '../API/api';
import { useApi } from '../hooks/useApi';
import { CategoryList } from '../components/CategoryList';

export function CategoryPage() {
  const { categoryName } = useParams();

  const categoryList = useApi(getMealsByCategory, 'meals', categoryName);
  return (
    <>
      <CategoryList categoryList={categoryList} />
    </>
  );
}
