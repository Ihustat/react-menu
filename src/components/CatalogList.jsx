import { CatalogItem } from './CatalogItem';
import { Breadcrumbs } from './UI/breadcrumbs/Breadcrumbs';
import { useContext, useEffect } from 'react';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { BackBtn } from '../components/UI/button/BackBtn';

export function CatalogList({ catalog = [], categoryName = '' }) {
  const { breadcrumbs, setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    categoryName && setBreadcrumbs(['All categories', categoryName]);
  }, []);
  return (
    <>
      {!catalog.length ? (
        <h1>Nothing found</h1>
      ) : categoryName ? (
        <>
          <Breadcrumbs arr={breadcrumbs} />
          <BackBtn />
          <div className='categories__wrapper'>
            {catalog.map((cat) => (
              <CatalogItem key={cat.idCategory} {...cat} />
            ))}
          </div>
        </>
      ) : (
        <div className='categories__wrapper'>
          {catalog.map((cat) => (
            <CatalogItem key={cat.idCategory} {...cat} />
          ))}
        </div>
      )}
    </>
  );
}
