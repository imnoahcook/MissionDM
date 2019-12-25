import { gql } from 'apollo-server';

const typeDefs = gql`
  type Game {
    id: ID!
    name: String!
    players: [Player!]!
    teams: Boolean!
  }
  type Player {
    id: ID!
    name: String!
    team: String
  }
  type Team {
    id: ID!
    name: String!
  }
  type Mutation {
    createTeam(name: String!, gameId: ID!): Team!
    createGame(name: String!, password: String, teams: Boolean!): Game!
    createPlayer(name: String!, gameId: ID!, teamId: ID!): Player!
  }
  type Query {
    games: [Game!]
  }
`;

export default typeDefs;
