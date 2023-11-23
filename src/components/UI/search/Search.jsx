import { useState } from 'react';
import { MyButton } from '../button/MyButton';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export function Search({ cb }) {
  const [search, setSearch] = useState('');

  function handleKey(e) {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  function handleSubmit() {
    cb(search);
  }

  return (
    <div>
      <input
        value={search}
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <MyButton onClick={handleSubmit}>Search</MyButton>
    </div>
  );
}
