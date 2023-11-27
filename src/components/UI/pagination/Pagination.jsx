import { MyButton } from '../button/MyButton';

export function Pagination({ pages, setCurrentPage }) {
  const pagesArr = [];
  for (let i = 0; i < pages; i++) {
    pagesArr.push(i);
  }
  return (
    <ul>
      {pagesArr.map((page) => (
        <li key={page}>
          <MyButton
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
