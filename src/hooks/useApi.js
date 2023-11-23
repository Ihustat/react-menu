import { useState, useEffect } from 'react';

export function useApi(cb, name, params = '') {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    cb(params).then((data) => setApiData(data[name]));
  }, []);

  return apiData;
}
