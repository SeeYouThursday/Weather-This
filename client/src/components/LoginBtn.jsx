import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-tailwind/react';
// import { ADD_USER } from '../../utils/mutations';
// import { useMutation } from '@apollo/client';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="text"
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
