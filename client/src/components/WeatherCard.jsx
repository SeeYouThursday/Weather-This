import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
export default function WeatherCard({ date, temp, wind, humidity }) {
  return (
    <>
      <Card className="transition-transform duration-500 ease-in-out transform hover:scale-105 grid  items-end justify-center text-center bg-[url('/5day_card.png')] bg-cover bg-center rounded-large">
        {/* issues with offset styling <CardHeader></CardHeader> */}

        <CardBody>
          {' '}
          <CardHeader
            shadow={false}
            color="transparent"
            // className="m-0"
          >
            <Typography variant="h5" color="" className="mb-2">
              <p
                style={{
                  fontFamily: 'poppins',
                  color: 'black',
                  fontStyle: 'italic',
                }}
              >
                {dayjs(date).format('dddd')}
              </p>{' '}
              {dayjs(date).format('M/D/YYYY')}
            </Typography>
          </CardHeader>
          <Typography variant="lead" color="blue-gray" className="mb-2">
            {Math.ceil(temp)}&#8457;
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Wind: {wind}
            Humidity: {humidity}
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
      <a href="#" className="inline-block">
        <Button size="sm" variant="text" className="flex items-center gap-2">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </a>
      <Typography>Placeholder</Typography>
    </CardFooter> */}
      </Card>
    </>
  );
}

// export default WeatherCard;
