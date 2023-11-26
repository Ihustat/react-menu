import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CatalogMain } from '../pages/CatalogMain';
import { FilteredCatalog } from '../pages/FilteredCatalog';
import { Meal } from '../pages/Meal';
import { ErrorPage } from '../pages/ErrorPage';

export function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CatalogMain />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/category/:categoryName',
      element: <FilteredCatalog />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/meal/:mealId',
      element: <Meal />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <main className='content container'>
      <RouterProvider router={router} />
    </main>
  );
}
