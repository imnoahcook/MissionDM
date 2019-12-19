import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

export default typeDefs;
