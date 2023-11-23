export function MyButton({ children, ...props }) {
  return (
    <button className='btn orange lighten-2' {...props}>
      {children}
    </button>
  );
}
