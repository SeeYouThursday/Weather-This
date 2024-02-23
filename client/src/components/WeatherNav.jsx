import { Navbar, Typography, Avatar } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/WeatherThisLogo.png'; //?? Nav Btns
const navBtns = [
  { name: 'Login', route: '/login' },
  { name: 'Sign Up', route: '/signup' },
  { name: 'Dashboard', route: '/dashboard' },
];

const genNavBtns = navBtns.map((btn, index) => {
  return (
    <Typography
      key={index}
      as={Link}
      to={btn.route}
      variant="h4"
      color="blue"
      gradient
      style={{ padding: 5 }}
    >
      {btn.name}
    </Typography>
  );
});

//?? Actual Export of Component
export default function WeatherNav() {
  return (
    <>
      <Navbar>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            margin: 0,
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Avatar src={Logo} alt="logo" />
          {genNavBtns}
        </div>
      </Navbar>
    </>
  );
}
