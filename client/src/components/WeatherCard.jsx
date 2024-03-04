import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import five_day from '../assets/images/5dayAsset.avif';

export default function WeatherCard({ date, temp, wind, humidity }) {
  return (
    <>
      <Card
        className="transition-transform duration-500 ease-in-out transform hover:scale-105 grid  items-end justify-center text-center bg-cover bg-center rounded-large"
        style={{
          backgroundImage: `url(${five_day})`,
          // backgroundBlendMode: 'multiply',
        }}
        //Fallback for card background
        onError={(e) => {
          e.target.style.backgroundImage =
            'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))';
        }}
      >
        {/* issues with offset styling <CardHeader></CardHeader> */}

        <CardBody>
          {' '}
          <CardHeader shadow={false} color="transparent">
            <Typography variant="h5" color="black" className="mb-2">
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
      </Card>
    </>
  );
}

// export default WeatherCard;
