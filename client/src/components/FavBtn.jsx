import { IconButton } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_CITY } from '../../utils/mutations';

const FavBtn = ({ city }) => {
  const [favorite, setFavorite] = useState(false);
  const [saveCity] = useMutation(SAVE_CITY);

  const handleFavoriteClick = async () => {
    if (favorite) {
      // remove city request
      setFavorite(false);
    }
    //add city to favorites
    // await saveCity(city);
    setFavorite(!favorite);
    console.log(favorite);
  };

  return (
    <IconButton onClick={handleFavoriteClick} color="blue">
      {favorite ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={faStar} color="blue" />
      )}
    </IconButton>
  );
};

export default FavBtn;
