import path from 'path';
import db from './config/connection.js';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import express from 'express';
import http from 'http';
import cors from 'cors';
const PORT = 3001;
// import { typeDefs, resolvers } from './schema/index.js';
import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

//instaniate express
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // plugins: [ApolloServerPluginDrainHttpServer([httpServer])],
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (_, res) => {
    // Remove 'req' parameter
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

await server.start();

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ([req]) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 3001 }, resolve));
console.log(`🚀 Server ready at http://localhost:3001/graphql`);
