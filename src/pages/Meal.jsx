import { useContext, useEffect, useMemo, useState } from 'react';
import { getMealById } from '../API/api';
import { Preloader } from '../components/UI/preloader/Preloader';
import { Breadcrumbs } from '../components/UI/breadcrumbs/Breadcrumbs';

import { useParams } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { BackBtn } from '../components/UI/button/BackBtn';

export function Meal() {
  const { mealId } = useParams();
  const [mealInfo, setMealInfo] = useState([]);

  const { breadcrumbs, meal } = useContext(BreadcrumbsContext);

  const breadArr = useMemo(() => {
    if (breadcrumbs.length === 0) {
      return ['All categories', mealInfo[0]?.strCategory, mealInfo[0]?.strMeal];
    } else {
      return [...breadcrumbs, meal];
    }
  }, [mealInfo]);

  useEffect(() => {
    getMealById(mealId).then((data) => setMealInfo(data.meals));
  }, []);

  return (
    <>
      {!mealInfo.length ? (
        <Preloader />
      ) : (
        <div>
          <Breadcrumbs arr={breadArr} />
          <div className='meal__wrapper'>
            <img
              src={mealInfo[0].strMealThumb}
              alt={mealInfo[0].strMeal}
              className='meal__img'
            />
            <h2 className='meal__title'>{mealInfo[0].strMeal}</h2>
            <div className='meal__area'>Area: {mealInfo[0].strArea}</div>
            <div className='meal__category'>
              Category: {mealInfo[0].strCategory}
            </div>
            <div className='meal__descr'>{mealInfo[0].strInstructions}</div>
          </div>
          <BackBtn />
        </div>
      )}
    </>
  );
}
