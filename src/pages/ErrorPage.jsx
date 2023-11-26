import { useRouteError } from 'react-router-dom';
import { BackBtn } from '../components/UI/button/BackBtn';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, something goes wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <BackBtn />
    </div>
  );
}
