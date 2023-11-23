import { CategoriesItem } from './CategoriesItem';
import { Preloader } from './UI/preloader/Preloader';

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
