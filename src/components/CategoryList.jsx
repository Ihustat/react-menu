import { useContext, useEffect } from 'react';
import { CategoryItem } from './CategoryItem';
import { Preloader } from './UI/preloader/Preloader';
import { Breadcrumbs } from './UI/breadcrumbs/Breadcrumbs';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { BackBtn } from './UI/button/BackBtn';

export function CategoryList({ categoryList = [], categoryName }) {
  const { breadcrumbs, setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs(['All categories', categoryName]);
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
          <BackBtn />
        </>
      )}
    </>
  );
}
