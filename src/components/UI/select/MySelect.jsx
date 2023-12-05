import classes from './MySelect.module.css';

export function MySelect({ options, defaultValue, value, cb }) {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={(e) => cb(e.target.value)}
    >
      <option value='All' disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
