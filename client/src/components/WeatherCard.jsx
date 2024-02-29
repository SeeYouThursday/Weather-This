import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from '@material-tailwind/react';

export default function WeatherCard({ date, temp, wind, humidity }) {
  return (
    <>
      <Card className="mt-6 w-200 h-30">
        <CardHeader>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Weather Forecast:
            {date}
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {temp}
            {wind}
            {humidity}
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
