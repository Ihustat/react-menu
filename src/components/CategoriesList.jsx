import { CategoriesItem } from './CategoriesItem';

export function CategoriesList({ categories = [] }) {
  return (
    <>
      {!categories.length ? (
        <h1>Nothing found</h1>
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
