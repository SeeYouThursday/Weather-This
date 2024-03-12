import { Navbar, Avatar, Button } from '@material-tailwind/react';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn'; // import webPLogo from '../../public/WeatherThisLogoWP.webp';
import Profile from './Profile';

// import LogoPng from '../assets/images/WeatherThisLogoPNG.png';
import { useAuth0 } from '@auth0/auth0-react';

//?? Actual Export of Component
export default function WeatherNav() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <Navbar
        className="flex justify-between items-center bg-gradient-to-r from-cyan-500 rounded-none"
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          minWidth: '99vw',
        }}
      >
        <div className="flex flex-col text-center items-center justify-center">
          <div className="flex items-end">
            <a href="/">
              <Avatar
                type="image/webp"
                srcSet="/WeatherThisLogoWP.webp"
                // variant=""
                alt="Weather This App Logo"
                className="p-2"
              />
            </a>
            <h3 className="mb-0.5">WEATHER THIS</h3>
          </div>
          <p className="text-white-500">
            {' '}
            We look outside so you don&apos;t have to!
          </p>
        </div>
        <div className="flex">
          {isAuthenticated ? (
            <>
              <a href="/dashboard">
                <Button variant="text">Dashboard</Button>
              </a>
              <Profile user={user} />
              <LogoutBtn />
            </>
          ) : (
            <LoginBtn />
          )}
        </div>
      </Navbar>{' '}
    </div>
  );
}
