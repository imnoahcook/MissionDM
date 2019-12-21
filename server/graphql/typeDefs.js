import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Player {
    id: ID!
    name: String!
    imageurl: String!
  }

  type Query {
    players: [Player!]!
  }
`;

export default typeDefs;
