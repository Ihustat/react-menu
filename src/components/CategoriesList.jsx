import { useContext } from 'react';
import { CategoriesItem } from './CategoriesItem';
import { Preloader } from './UI/preloader/Preloader';
import { Breadcrumbs } from './UI/preloader/breadcrumbs/Breadcrumbs';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';

export function CategoriesList({ categories = [] }) {
  return (
    <>
      {!categories.length ? (
        <Preloader />
      ) : (
        <div className='categories__wrapper'>
          {categories.map((cat) => (
            <CategoriesItem key={cat.idCategory} {...cat} />
          ))}
        </div>
      )}
    </>
  );
}
