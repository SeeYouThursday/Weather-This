import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    _id
    email
    savedSearches
}`;

// export const QUERY_CITIES = ``;
