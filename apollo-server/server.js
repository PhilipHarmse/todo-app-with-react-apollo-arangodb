import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';
import Mocks from './data/mocks';
import Resolvers from './data/resolvers';
import cors from 'cors';

const GRAPHQL_PORT = 9500;

var app = express().use('*', cors());

const graphQLServer = app;
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
  //mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
