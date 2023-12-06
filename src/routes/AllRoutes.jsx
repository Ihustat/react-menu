import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CatalogMain } from '../pages/CatalogMain';
import { FilteredCatalog } from '../pages/FilteredCatalog';
import { CountryPage } from '../pages/CountryPage';
import { Meal } from '../pages/Meal';
import { ErrorPage } from '../pages/ErrorPage';

export function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/react-menu' element={<CatalogMain />} />
        <Route
          path='/react-menu/category/:categoryName'
          element={<FilteredCatalog />}
        />
        <Route
          path='/react-menu/country/:countryName'
          element={<CountryPage />}
        />
        <Route path='/react-menu/meal/:mealId' element={<Meal />} />
        <Route path='/react-menu/error' element={<ErrorPage />} />
        <Route path='*' element={<Navigate to='/react-menu/error' replace />} />
      </Routes>
    </Router>
  );
}
