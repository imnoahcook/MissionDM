import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typeDefs';
import resolvers from '#root/graphql/resolvers';
import cors from 'cors';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

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
