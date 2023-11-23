import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';

export function CategoriesItem({
  idCategory: id,
  strCategory: title,
  strCategoryThumb: img,
  strCategoryDescription: descr,
}) {
  const router = useNavigate();
  const { setCategory } = useContext(BreadcrumbsContext);

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={img} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>{descr.slice(0, 120)}...</p>
      </div>
      <div className='card-action'>
        <button
          className='btn orange lighten-2'
          onClick={() => {
            router(`/category/${title}`);
            setCategory(title);
          }}
        >
          Show Category
        </button>
      </div>
    </div>
  );
}
