import { gql } from '@apollo/client';

export const addUser = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
}`;

export const loginUser = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            email
            savedCities
        }
    }`;

export const addCity = gql``;

export const removeCity = gql``;
//Future Dev: Remove Cities
