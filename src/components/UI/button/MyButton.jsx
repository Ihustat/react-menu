import classes from './MyButton.module.css';

export function MyButton({ children, ...props }) {
  return (
    <button className={`btn orange lighten-2 ${classes.myBtn}`} {...props}>
      {children}
    </button>
  );
}
