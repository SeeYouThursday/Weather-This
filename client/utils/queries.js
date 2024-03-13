import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    _id
    email
    user_id
    savedCities
}`;

export const QUERY_USERS = gql`
  query users {
    user {
      _id
      user_id
      email
      savedCities
    }
  }
`;

// export const QUERY_CITIES = ``;
