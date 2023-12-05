import { useEffect } from 'react';

export function useSelect() {
  // useEffect(() => {
  //   fetchFunction().then((data) => {
  //     if (showCounter !== 'All') {
  //       setPagesCounter(data[option].length / showCounter);
  //       setOption(
  //         data.categories.slice(
  //           showCounter * currentPage,
  //           showCounter * currentPage + showCounter
  //         )
  //       );
  //     } else {
  //       setOption(data.categories);
  //       setPagesCounter(0);
  //     }
  //   });
  // }, [showCounter, currentPage]);
  function showData(showCounter, currentPage, data) {
    let pagesCount, returnData;
    if (showCounter !== 'All') {
      pagesCount = data.length / showCounter;
      returnData = data.slice(
        showCounter * currentPage,
        showCounter * currentPage + showCounter
      );
    } else {
      pagesCount = 0;
      returnData = data;
    }
    return { pagesCount, returnData };
  }

  return showData;
}
