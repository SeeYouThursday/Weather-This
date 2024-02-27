import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import http from 'http';
import cors from 'cors';

import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

const __filename = fileURLToPath(import.meta.url);
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

console.log(`🚀 Server ready at http://localhost:3001/graphql`);
