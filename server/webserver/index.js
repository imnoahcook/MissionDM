import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { ApolloServer, gql } from 'apollo-server-express';
// import typeDefs from '../graphql/typeDefs';
import resolvers from '#root/graphql/resolvers';
import cors from 'cors';
// A map of functions which return data for the schema.

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    games: String
  }
`;

// A map of functions which return data for the schema.
const resolvers2 = {
  Query: {
    games: () => 'world',
  },
};
// console.log(resolvers2);
// console.log(resolvers);

console.log(resolvers.Query.games());
// console.log(resolvers;
const apolloServer = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

const app = express();

// lol not sure if needed but lets have cors just in case
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
      'X-Password-Expired',
    ],
    optionsSuccessStatus: 200,
  }),
);

apolloServer.applyMiddleware({ app, path: '/graphql' });

// Parse post data
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// parse application/json
app.use('/graphql', bodyParser.json());

// API Routess
app.use('/api', require('../routes/api.routes'));

app.all('*', (req, res) => {
  res.status(404).json({ status: 'No Endpoint 🔥' });
});

// Open up and listen to port listed in config file
app.listen(
  config.port,
  console.info.bind(
    console,
    `🚀 SERVER: Launched backend on http://localhost:${config.port}`,
  ),
);
