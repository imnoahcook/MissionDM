import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typeDefs';
// A map of functions which return data for the schema.

const apolloServer = new ApolloServer({
  // These will be defined for both new or existing servers
  resolvers: {},
  typeDefs,
});

const app = express();

apolloServer.applyMiddleware({ app, path: '/graphql' }); // app is from an existing express app. Mount Apollo middleware here. If no path is specified, it defaults to `/graphql`.

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
  res.status(404).json({ status: 'No Endpoint' });
});

// Open up and listen to port listed in config file
app.listen(
  config.port,
  console.info.bind(
    console,
    `SERVER: Launched backend on http://localhost:${config.port}`,
  ),
);