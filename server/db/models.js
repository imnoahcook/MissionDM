import { Model, Sequelize } from 'sequelize';
import sequelize from './connection';

class Game extends Model {}
Game.init(
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    teams: Sequelize.BOOLEAN,
    password: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'game',
  },
);

class Team extends Model {}
Team.init(
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: 'team',
  },
);

class Player extends Model {}
Player.init(
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    gameId: {
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: Game,
        key: 'id',
      },
      allowNull: false,
    },
    teamId: {
      type: Sequelize.INTEGER.UNSIGNED,

      references: {
        model: Team,
        key: 'id',
      },
      allowNull: false,
    },
    name: Sequelize.STRING,
    imageurl: Sequelize.STRING,
    admin: Sequelize.BOOLEAN,
    killCount: Sequelize.INTEGER.UNSIGNED,
    killTime: Sequelize.DATE,
    targetId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'player',
    targetId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
    },
  },
);

Player.belongsTo(Game);
Player.belongsTo(Team);
Game.hasMany(Player);
Team.hasMany(Player);
// export default [Game, Team];
export default [Game, Team, Player];
