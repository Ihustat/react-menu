import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';
import { BreadcrumbsContext } from './context/BreadcrumbsContext.jsx';
import { useState } from 'react';

function App() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState('');
  const [area, setArea] = useState('');

  return (
    <BreadcrumbsContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs,
        category,
        setCategory,
        meal,
        setMeal,
        area,
        setArea,
      }}
    >
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BreadcrumbsContext.Provider>
  );
}

export default App;
