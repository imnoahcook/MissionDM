import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typeDefs';
import resolvers from '#root/graphql/resolvers';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import injectSession from './injectSession';

const apolloServer = new ApolloServer({
  context: a => a,
  typeDefs,
  resolvers,
});

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  }),
);

app.use(injectSession);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.use('/api', require('../routes/api.routes'));

app.all('*', (req, res) => {
  res.status(404).json({ status: 'No Endpoint 🔥' });
});

app.listen(
  config.port,
  console.info.bind(
    console,
    `SERVER: 🚀 Launched backend on http://localhost:${config.port}`,
  ),
);
