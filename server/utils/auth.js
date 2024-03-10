import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

// const secret = import.meta.env.secret;
// const expiration = import.meta.env.expiration;

// Your Auth0 domain
const auth0Domain = `dev-d4jiv6bsx28qa518.us.auth0.com`;

// Initialize the JWKS client
const client = jwksClient({
  jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.getPublicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

const options = {
  audience: 'https://dev-d4jiv6bsx28qa518.us.auth0.com/api/v2/',
  issuer: `https://${auth0Domain}/`,
  algorithms: ['RS256'],
};

export default {
  authMiddleware: ({ req }) => {
    const token = req.headers.authorization;
    const user = new Promise((resolve, reject) => {
      jwt.verify(token, getKey, options, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded.email);
      });
    });
    return { user };
  },
};
