import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import five_day from '../assets/images/5dayAsset.avif';

export default function WeatherCard({
  date,
  temp,
  wind,
  humidity,
  icon,
  description,
}) {
  return (
    <>
      <Card
        className="transition-transform duration-500 ease-in-out transform hover:scale-105 grid  items-end justify-center text-center bg-cover bg-center rounded-large relative"
        style={{
          backgroundImage: `url(${five_day})`,
        }}
        //Fallback for card background
        onError={(e) => {
          e.target.style.backgroundImage =
            'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))';
        }}
      >
        <CardBody className="pt-0">
          <CardHeader
            shadow={false}
            color="transparent"
            className="bg-blue-500 w-full p-0 m-auto"
          >
            <Typography variant="h4" color="black" className="mb-2">
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
          <div className="flex justify-center align-center">
            <Typography variant="lead" color="blue-gray" className="m-auto">
              {Math.ceil(temp)}&#8457;{' '}
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
              className="m-auto"
            />
          </div>
          <Typography variant="h6" color="blue-gray">
            Wind: {wind} mph
          </Typography>
          <Typography variant="h6" color="blue-gray">
            Humidity: {humidity}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
}

// export default WeatherCard;
