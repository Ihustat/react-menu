import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { MyButton } from './UI/button/MyButton';

export function CatalogItem({
  strCategory,
  strMeal,
  strCategoryThumb,
  strMealThumb,
  strCategoryDescription: descr,
  idMeal: id,
}) {
  const router = useNavigate();
  const { setCategory, setMeal, setArea, area } =
    useContext(BreadcrumbsContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={strCategoryThumb || strMealThumb}
          alt={strCategory || strMeal}
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strCategory || strMeal}</span>
        <p>{descr ? `${descr.slice(0, 120)}...` : null}</p>
      </div>
      <div className='card-action'>
        {strCategory ? (
          <MyButton
            onClick={() => {
              router(`/react-menu/category/${strCategory}`);
              setCategory(strCategory);
              setArea('');
            }}
          >
            Show Category
          </MyButton>
        ) : (
          <MyButton
            onClick={() => {
              router(`/react-menu/meal/${id}`);
              setMeal(strMeal);
            }}
          >
            Show Meal
          </MyButton>
        )}
      </div>
    </div>
  );
}
