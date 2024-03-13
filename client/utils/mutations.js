import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($email: String!, $user_id: String!) {
    addUser(email: $email, user_id: $user_id) {
        token
        user {
            _id
            email
            user_id
        }
    }
}`;

// export const loginUser = gql`
// mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//         token
//         user {
//             _id
//             email
//             savedCities
//         }
//     }`;

export const SAVE_CITY = gql`
mutation saveCity($newCity: String) {
    saveCity(newCity: $newCity) {
        user {
            savedCities
        }
    }
}`;

// export const REMOVE_CITY = gql``;
//Future Dev: Remove Cities
