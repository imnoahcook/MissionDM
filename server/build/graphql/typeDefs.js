"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _apolloServer = require("apollo-server");

const typeDefs = _apolloServer.gql`
  scalar Date

  type Game {
    id: ID!
    name: String!
    players: [Player!]!
    teams: Boolean!
    isRunning: Boolean!
  }

  type Player {
    id: ID!
    team: String
    game: Game!
    password: String!
  }

  type Team {
    id: ID!
    name: String!
  }

  type User {
    name: String!
    imageurl: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
    games: [Game!]!
  }

  type GameInfo {
    admin: Boolean!
    alive: Boolean!
    target: User
    name: String!
    password: String!
    revived: Boolean!
    userId: String!
  }

  type Mutation {
    createTeam(name: String!, gameId: ID!): Team!
    createGame(name: String!, password: String, teams: Boolean!): Game!
    createPlayer(password: String!): Player
    createUser(fbid: String!): User!
    createUserSession(
      fbid: String!
      name: String!
      imageurl: String!
    ): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
    killTarget(gameId: ID!, password: String!): Boolean!
    startGame(gameId: ID!): Boolean!
    randomizeTargets(gameId: ID!): Boolean!
    kill24Hours(gameId: ID!): Boolean!
    reverseTargets(gameId: ID!): Boolean!
  }

  type Query {
    games: [Game!]!
    target(gameId: ID): User
    player(playerId: ID): [Player]
    userSession(me: Boolean!): UserSession
    gameInfo(gameId: ID!): GameInfo
  }
`;var _default =

typeDefs;exports.default = _default;