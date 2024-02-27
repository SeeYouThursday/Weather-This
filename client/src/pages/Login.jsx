import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Checkbox,
} from '@material-tailwind/react';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
      }}
    >
      <Card className="w-96" shadow="true">
        <CardHeader
          variant="gradient"
          color="gray"
          className="relative mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

// https://reactweatherdash-5d1448c64bce.herokuapp.com/

// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import Button from '@material-ui/core/Button';

// function MyComponent() {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <Button onClick={() => loginWithRedirect()}>
//       Log In
//     </Button>
//   );
// }
