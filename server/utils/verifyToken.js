const { ApolloServer, gql, AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
import { User } from '../schema';

const client = jwksClient({
  jwksUri: `https://dev-d4jiv6bsx28qa518.us.auth0.com/.well-known/jwks.json`,
});

export function getKey(header, cb) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.getPublicKey() || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: 'mk0DJQkDHbdwRBAaazq8quR5p6w7FZeT',
  issuer: `https://dev-d4jiv6bsx28qa518.us.auth0.com/`,
  algorithms: ['RS256'],
};
