import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// https://www.apollographql.com/docs/apollo-server/migration/#migrate-from-apollo-server-express
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import http from 'http';
import cors from 'cors';

import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

// const client = jwksClient({
//   jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
// });

// To configure Apollo Server to authenticate requests using Auth0, you'll need to verify the JWT (JSON Web Token) that Auth0 provides when a user logs in. Here's a step-by-step guide:

// Install necessary packages: In your server-side application, install the necessary packages. This typically includes jsonwebtoken and jwks-rsa for JWT verification.

// Set up JWT verification: Use the jsonwebtoken and jwks-rsa packages to set up JWT verification. You'll need your Auth0 domain for this.

// Add authentication to Apollo Server: In your Apollo Server setup, use the context option to add authentication. You can access the Authorization header of the request, verify the JWT, and then add the user's information to the context.

// function getKey(header, callback){
//   client.getSigningKey(header.kid, function(err, key) {
//     var signingKey = key.publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   });
// }

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     const token = req.headers.authorization;
//     const user = jwt.verify(token, getKey, {
//       audience: process.env.AUTH0_CLIENT_ID,
//       issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//       algorithms: ['RS256']
//     });

//     return { user };
//   }
// });
