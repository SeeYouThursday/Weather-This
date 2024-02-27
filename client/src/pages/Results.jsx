//if not signed in render div saying "Sign in or Sign Up to save your searches!"
import WeatherCard from '../components/WeatherCard';

//Data from fetch will be passed through to this card
const Results = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          color: 'white',
          fontSize: 100,
          zIndex: 1,
          margin: 'auto',
          backgroundColor: 'blueviolet',
          padding: 9,
        }}
      >
        TESTING123
      </h2>
    </div>
  );
};

export default Results;
