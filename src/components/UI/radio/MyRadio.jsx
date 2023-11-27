export function MyRadio({ showCounter, setShowCounter, setCurrentPage }) {
  return (
    <fieldset>
      <legend>Show:</legend>
      <p>
        <label>
          <input
            className='with-gap'
            name='count'
            type='radio'
            value='0'
            checked={showCounter === 0}
            onChange={(e) => {
              setShowCounter(+e.target.value);
              setCurrentPage(0);
            }}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className='with-gap'
            name='count'
            type='radio'
            value='3'
            checked={showCounter === 3}
            onChange={(e) => {
              setShowCounter(+e.target.value);
              setCurrentPage(0);
            }}
          />

          <span>by 3</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className='with-gap'
            name='count'
            type='radio'
            value='6'
            checked={showCounter === 6}
            onChange={(e) => {
              setShowCounter(+e.target.value);
              setCurrentPage(0);
            }}
          />
          <span>by 6</span>
        </label>
      </p>
    </fieldset>
  );
}
