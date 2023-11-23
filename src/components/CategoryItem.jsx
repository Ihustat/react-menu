import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';

export function CategoryItem({
  idMeal: id,
  strMeal: title,
  strMealThumb: img,
}) {
  const router = useNavigate();
  const { setMeal } = useContext(BreadcrumbsContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={img} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
      </div>
      <div className='card-action'>
        <button
          className='btn orange lighten-2'
          onClick={() => {
            router(`/meal/${id}`);
            setMeal(title);
          }}
        >
          Show Meal
        </button>
      </div>
    </div>
  );
}
