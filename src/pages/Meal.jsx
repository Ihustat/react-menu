import { useContext, useEffect, useMemo, useState } from 'react';
import { getMealById } from '../API/api';
import { Preloader } from '../components/UI/preloader/Preloader';
import { Breadcrumbs } from '../components/UI/breadcrumbs/Breadcrumbs';

import { useNavigate, useParams } from 'react-router-dom';
import { BreadcrumbsContext } from '../context/BreadcrumbsContext';
import { BackBtn } from '../components/UI/button/BackBtn';
import { MyButton } from '../components/UI/button/MyButton';

export function Meal() {
  const { mealId } = useParams();
  const [mealInfo, setMealInfo] = useState([]);
  const navigate = useNavigate();

  const { breadcrumbs, meal, setArea, setCategory } =
    useContext(BreadcrumbsContext);

  const breadArr = useMemo(() => {
    if (breadcrumbs.length === 0) {
      return ['All categories', mealInfo[0]?.strCategory, mealInfo[0]?.strMeal];
    } else {
      return [...breadcrumbs, meal];
    }
  }, [mealInfo]);

  function navigateTo(param, paramName) {
    if (param === 'country') {
      navigate(`/country/${paramName}`);
      setArea(paramName);
      setCategory('');
    } else {
      navigate(`/category/${paramName}`);
      setArea('');
      setCategory(paramName);
    }
  }

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
            <MyButton
              className='meal__area pointed'
              onClick={() => {
                navigateTo('country', mealInfo[0].strArea);
              }}
            >
              Area: {mealInfo[0].strArea}
            </MyButton>
            <MyButton
              className='meal__category pointed'
              onClick={() => {
                navigateTo('', mealInfo[0].strCategory);
              }}
            >
              Category: {mealInfo[0].strCategory}
            </MyButton>
            <div className='meal__descr'>{mealInfo[0].strInstructions}</div>
          </div>
          <BackBtn />
        </div>
      )}
    </>
  );
}
