export function CategoryItem({
  idMeal: id,
  strMeal: title,
  strMealThumb: img,
}) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={img} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
      </div>
      <div className='card-action'>
        <button className='btn orange lighten-2'>Show Meal</button>
      </div>
    </div>
  );
}
