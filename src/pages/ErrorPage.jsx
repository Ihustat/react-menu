import { BackBtn } from '../components/UI/button/BackBtn';

export function ErrorPage() {
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, something goes wrong.</p>
      <p>
        <i>Page not found</i>
      </p>
      <BackBtn />
    </div>
  );
}
