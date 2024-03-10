import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// https://www.apollographql.com/docs/apollo-server/migration/#migrate-from-apollo-server-express
import auth from './utils/auth.js';
const { authMiddleware } = auth;
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import http from 'http';
import cors from 'cors';

import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
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

// Add authentication to Apollo Server: In your Apollo Server setup, use the context option to add authentication. You can access the Authorization header of the request, verify the JWT, and then add the user's information to the context.
