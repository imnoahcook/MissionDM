import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/typeDefs';
import resolvers from '#root/graphql/resolvers';
import cors from 'cors';
import passport from 'passport';
import '#root/passport';

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
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// );

// parse application/json
app.use('/graphql', bodyParser.json());

// API Routess
app.use('/api', require('../routes/api.routes'));

// app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(
//   require('express-session')({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true,
//   }),
// );

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function(req, res) {
  console.log('login render');
});

app.get(
  '/login/facebook',
  passport.authenticate('facebook', {
    scope: ['email'],
  }),
  () => {
    console.log('you just got got');
  },
);

app.get(
  '/return',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://localhost:3000/');
  },
);

app.get(
  '/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => {
    console.log('gud');
  },
);
app.all('*', (req, res) => {
  res.status(404).json({ status: 'No Endpoint 🔥' });
});

// Open up and listen to port listed in config file
app.listen(
  config.port,
  console.info.bind(
    console,
    `SERVER: 🚀 Launched backend on http://localhost:${config.port}`,
  ),
);
