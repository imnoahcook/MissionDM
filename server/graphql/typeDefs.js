import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Game {
    id: ID!
    name: String!
    players: [Player!]!
  }
  type Player {
    id: ID!
    name: String!
  }
  type Query {
    games: [Game!]!
  }
`;

export default typeDefs;
