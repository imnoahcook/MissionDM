"use strict";var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _https = _interopRequireDefault(require("https"));
var _http = _interopRequireDefault(require("http"));
var _apolloServerExpress = require("apollo-server-express");
var _typeDefs = _interopRequireDefault(require("../graphql/typeDefs"));
var _resolvers = _interopRequireDefault(require("../graphql/resolvers"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _injectSession = _interopRequireDefault(require("./injectSession"));
var _fs = _interopRequireDefault(require("fs"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const apolloServer = new _apolloServerExpress.ApolloServer({
  context: a => a,
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default });


const app = (0, _express.default)();

app.use((0, _cookieParser.default)());

app.use(
(0, _cors.default)({
  origin: (origin, cb) => cb(null, true),
  credentials: true }));



app.use(_injectSession.default);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.use('/api', require("../routes/api.routes"));

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

const privateKey = _fs.default.readFileSync(
'/etc/letsencrypt/live/floridadm.org/privkey.pem');

const certificate = _fs.default.readFileSync(
'/etc/letsencrypt/live/floridadm.org/fullchain.pem');


const credentials = { key: privateKey, cert: certificate };

const httpServer = _http.default.createServer(app);
const httpsServer = _https.default.createServer(credentials, app);

httpServer.listen(
3080,
console.info.bind(console, `SERVER: 🚀 Launched backend on port 3080`));

httpsServer.listen(
3443,
console.info.bind(console, `SERVER: 🚀 Launched backend on port 3443`));