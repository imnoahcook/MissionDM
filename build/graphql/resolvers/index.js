import * as Query from './Query';
import * as Mutation from './Mutation';
import UserSession from './UserSession';
import Player from './Player';
import GameInfo from './GameInfo';
const resolvers = {
  Player,
  UserSession,
  GameInfo,
  Query,
  Mutation
};
export default resolvers;