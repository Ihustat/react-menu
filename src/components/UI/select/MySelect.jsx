export function MySelect({ options, defaultValue, value, cb }) {
  return (
    <select value={value} onChange={(e) => cb(e.target.value)}>
      <option value=''>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.strArea} value={option.strArea}>
          {option.strArea}
        </option>
      ))}
    </select>
  );
}
