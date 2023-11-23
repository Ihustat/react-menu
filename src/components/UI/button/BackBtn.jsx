import { useNavigate } from 'react-router-dom';
import { MyButton } from './MyButton';

export function BackBtn() {
  const navigate = useNavigate();

  return (
    <MyButton
      onClick={() => {
        navigate(-1);
      }}
    >
      Back
    </MyButton>
  );
}
