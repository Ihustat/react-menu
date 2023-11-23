import { useContext, useEffect } from 'react';
import { getMealById } from '../API/api';
import { Preloader } from '../components/UI/preloader/Preloader';
import { Breadcrumbs } from '../components/UI/preloader/breadcrumbs/Breadcrumbs';
import { useApi } from '../hooks/useApi';
import { useParams } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';

export function Meal() {
  const { mealId } = useParams();

  const mealInfo = useApi(getMealById, 'meals', mealId);

  const { breadcrumbs, setBreadcrumbs, meal } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([...breadcrumbs, meal]);
  }, []);

  return (
    <>
      {!mealInfo.length ? (
        <Preloader />
      ) : (
        <div>
          <Breadcrumbs arr={breadcrumbs} />
          <img src={mealInfo[0].strMealThumb} alt='' />
          <h1>{mealInfo[0].strMeal}</h1>
          <p>{mealInfo[0].strInstructions}</p>
        </div>
      )}
    </>
  );
}
