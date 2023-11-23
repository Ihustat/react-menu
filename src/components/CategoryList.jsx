import { CategoryItem } from './CategoryItem';
import { Preloader } from './UI/preloader/Preloader';

export function CategoryList({ categoryList = [] }) {
  return (
    <>
      {!categoryList.length ? (
        <Preloader />
      ) : (
        <div className='categories__wrapper'>
          {categoryList.map((cat) => (
            <CategoryItem key={cat.idMeal} {...cat} />
          ))}
        </div>
      )}
    </>
  );
}
