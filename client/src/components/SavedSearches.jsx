// imports
import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Typography,
  Button,
  CardHeader,
  Avatar,
  List,
  ListItem,
} from '@material-tailwind/react';
// Component

import PropTypes from 'prop-types';

const SavedSearches = ({ searches }) => {
  SavedSearches.propTypes = {
    searches: PropTypes.array.isRequired,
  };

  const searchHistory = () => {
    searches.map((search) => {
      return <ListItem key={search._id}>{search}</ListItem>;
    });
  };

  return (
    <>
      <Card>
        <List>{searchHistory}</List>
      </Card>
    </>
  );
};

export default SavedSearches;
