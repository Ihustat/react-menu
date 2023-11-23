import { Link } from 'react-router-dom';
import classes from './Breadcrumbs.module.css';
import { useContext } from 'react';
import { BreadcrumbsContext } from '../../../context/BreadcrumbsContext';

export function Breadcrumbs({ arr }) {
  const { category } = useContext(BreadcrumbsContext);

  return (
    <ul className={classes.breadcrumbsList}>
      {arr.map((item, i) => (
        <li className={classes.breadcrumbsItem} key={item}>
          {i === 0 ? (
            <Link to='/'>{item}/ </Link>
          ) : i === arr.length - 1 ? (
            item
          ) : (
            <Link to={`/category/${category}`}>{item}/ </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
