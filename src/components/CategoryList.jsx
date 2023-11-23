import { useContext, useEffect } from 'react';
import { CategoryItem } from './CategoryItem';
import { Preloader } from './UI/preloader/Preloader';
import { Breadcrumbs } from './UI/preloader/breadcrumbs/Breadcrumbs';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';

export function CategoryList({ categoryList = [] }) {
  const { breadcrumbs, setBreadcrumbs, category } =
    useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs(['All categories', category]);
  }, []);

  return (
    <>
      {!categoryList.length ? (
        <Preloader />
      ) : (
        <>
          <Breadcrumbs arr={breadcrumbs} />
          <div className='categories__wrapper'>
            {categoryList.map((cat) => (
              <CategoryItem key={cat.idMeal} {...cat} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
