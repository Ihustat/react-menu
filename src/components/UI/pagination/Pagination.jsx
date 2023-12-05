import { MyButton } from '../button/MyButton';
import classes from './Pagination.module.css';

export function Pagination({ pages, setCurrentPage, currentPage }) {
  const pagesArr = [];
  for (let i = 0; i < pages; i++) {
    pagesArr.push(i);
  }
  return (
    <ul className={classes.pages__container}>
      {pagesArr.map((page) => (
        <li key={page}>
          <MyButton
            className={
              currentPage === page
                ? 'orange darken-3 btn'
                : 'btn orange lighten-2'
            }
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page + 1}
          </MyButton>
        </li>
      ))}
    </ul>
  );
}
