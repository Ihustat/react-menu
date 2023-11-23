import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CategoriesPage } from '../pages/CategoriesPage';
import { CategoryPage } from '../pages/CategoryPage';
import { Meal } from '../pages/Meal';

export function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CategoriesPage />,
    },
    {
      path: '/category/:categoryName',
      element: <CategoryPage />,
    },
    {
      path: '/meal/:mealId',
      element: <Meal />,
    },
  ]);
  return (
    <main className='content container'>
      <RouterProvider router={router} />
    </main>
  );
}
