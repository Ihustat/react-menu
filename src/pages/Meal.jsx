import { getMealById } from '../API/api';
import { Preloader } from '../components/UI/preloader/Preloader';
import { useApi } from '../hooks/useApi';
import { useParams } from 'react-router-dom';

export function Meal() {
  const { mealId } = useParams();

  const mealInfo = useApi(getMealById, 'meals', mealId);

  return (
    <>
      {!mealInfo.length ? (
        <Preloader />
      ) : (
        <div>
          <img src={mealInfo[0].strMealThumb} alt='' />
          <h1>{mealInfo[0].strMeal}</h1>
          <p>{mealInfo[0].strInstructions}</p>
        </div>
      )}
    </>
  );
}
