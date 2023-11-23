import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { MyButton } from './UI/button/MyButton';

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
        <MyButton
          onClick={() => {
            router(`/meal/${id}`);
            setMeal(title);
          }}
        >
          Show Meal
        </MyButton>
      </div>
    </div>
  );
}
