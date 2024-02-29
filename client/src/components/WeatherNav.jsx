import React from 'react'; // Add the missing import statement for React

import { Navbar, Typography, Avatar, Collapse } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/WeatherThisLogo.png';
import Search from './Search';
import LoginBtn from './LoginBtn';

//?? Nav Btns
const navBtns = [
  { name: 'Sign Up', route: '/signup' },
  { name: 'Dashboard', route: '/dashboard' },
];

const genNavBtns = navBtns.map((btn, index) => {
  return (
    <Typography
      key={index}
      as={Link}
      to={btn.route}
      variant="h5"
      color="white"
      gradient="true"
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
      <Navbar
        className="hover:bg-gradient-to-l bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4"
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignContent: 'center',
        }}
      >
        {/* <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          className=""
        > */}
        <a href="/">
          <Avatar src={Logo} alt="weather this logo" variant="rounded" />
        </a>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',

            margin: 0,
            borderRadius: 5,
            // padding: 5,
          }}
        >
          <LoginBtn />
          {genNavBtns}
        </div>
        {/* </div>{' '} */}
      </Navbar>{' '}
      <Search nav={true} />
    </>
  );
}
