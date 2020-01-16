import express from 'express';
import config from './config';
import https from 'https';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typeDefs';
import resolvers from '#root/graphql/resolvers';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import injectSession from './injectSession';
import fs from 'fs';

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

// app.listen(
//   config.port,
//   console.info.bind(
//     console,
//     `SERVER: 🚀 Launched backend on http://localhost:${config.port}`,
//   ),
// );

// const privateKey = fs.readFileSync(
//   '/etc/letsencrypt/live/floridadm.org/privkey.pem',
// );
// const certificate = fs.readFileSync(
//   '/etc/letsencrypt/live/floridadm.org/fullchain.pem',
// );

// const credentials = { key: privateKey, cert: certificate };

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(
  3080,
  console.info.bind(console, `SERVER: 🚀 Launched backend on port 3080`),
);
// httpsServer.listen(
//   3443,
//   console.info.bind(console, `SERVER: 🚀 Launched backend on port 3443`),
// );
