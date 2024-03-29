import { Button } from '@material-tailwind/react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="text"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutBtn;
