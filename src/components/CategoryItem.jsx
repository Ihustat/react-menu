import { useNavigate } from 'react-router-dom';

export function CategoryItem({
  idMeal: id,
  strMeal: title,
  strMealThumb: img,
}) {
  const router = useNavigate();
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
          onClick={() => router(`/meal/${id}`)}
        >
          Show Meal
        </button>
      </div>
    </div>
  );
}
