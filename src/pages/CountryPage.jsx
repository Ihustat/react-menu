import { useEffect, useState } from 'react';
import { CatalogList } from '../components/CatalogList';
import { Preloader } from '../components/UI/preloader/Preloader';
import { getMealsByArea } from '../API/api';
import { useParams } from 'react-router-dom';

export function CountryPage() {
  const [areaData, setAreaData] = useState([]);

  const { countryName } = useParams();

  useEffect(() => {
    getMealsByArea(countryName).then((data) => setAreaData(data.meals));
  }, []);

  return (
    <>
      {areaData.length === 0 ? (
        <Preloader />
      ) : (
        <CatalogList catalog={areaData} categoryName={countryName} />
      )}
    </>
  );
}
