import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Game {
    id: ID!
    name: String!
    players: [Player!]!
    teams: Boolean!
  }

  type Player {
    id: ID!
    team: String
  }

  type Team {
    id: ID!
    name: String!
  }

  type User {
    fbid: String!
    name: String!
    imageurl: String!
    id: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    createTeam(name: String!, gameId: ID!): Team!
    createGame(name: String!, password: String, teams: Boolean!): Game!
    createPlayer(gameId: ID!, teamId: ID!): Player!
    createUser(fbid: String!): User!
    createUserSession(
      fbid: String!
      name: String!
      imageurl: String!
    ): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    games: [Game!]
    player(playerId: ID): [Player]
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
