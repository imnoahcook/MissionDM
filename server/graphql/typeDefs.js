import { gql } from 'apollo-server';

// const typeDefs = gql`
//   type Game {
//     id: ID!
//     name: String!
//     players: [Player!]!
//   }
//   type Player {
//     id: ID!
//     name: String!
//   }
//   type Query {
//     games: [Game!]!
//   }
// `;

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
    games: [Game!]
  }
`;

// const typeDefs = gql`
//   type Game {
//     id: ID!
//     name: String!
//     players: [Player!]!
//   }
//   type Player {
//     id: ID!
//     name: String!
//   }
//   type Query {
//     games: String
//   }
// `;

export default typeDefs;
