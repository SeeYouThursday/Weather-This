import { Navbar, Typography, Avatar } from '@material-tailwind/react';
import LoginBtn from './LoginBtn';
// import webPLogo from '../../public/WeatherThisLogoWP.webp';
// import LogoPng from '../assets/images/WeatherThisLogoPNG.png';
//?? Actual Export of Component
export default function WeatherNav() {
  return (
    <div>
      <Navbar
        className="flex justify-evenly items-center hover:bg-gradient-to-l bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 lg:px-8 lg:py-4 rounded-none border-none"
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          minWidth: '99vw',
        }}
      >
        <Avatar
          type="image/webp"
          srcSet="/WeatherThisLogoWP.webp"
          variant="rounded"
          alt="Weather This App Logo"
        />
        <div className="flex flex-col text-center">
          <Typography variant="h3">WEATHER THIS</Typography>
          <p> We look outside so you don&apos;t have to!</p>
        </div>
        <div className="flex">
          <LoginBtn />
        </div>
      </Navbar>{' '}
    </div>
  );
}
