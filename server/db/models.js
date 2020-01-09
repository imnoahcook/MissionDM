import { Model, Sequelize } from 'sequelize';
import sequelize from './connection';

export class Game extends Model {}
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

export class Team extends Model {}
Team.init(
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    gameId: {
      type: Sequelize.INTEGER.UNSIGNED,
      references: {
        model: Game,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'team',
  },
);

export class Player extends Model {}
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
    imageurl: {
      type: Sequelize.STRING,
      defaultValue:
        'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    killCount: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    killTime: {
      type: Sequelize.DATE,
      defaultValue: null,
      allowNull: true,
    },
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

export class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    fbid: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
    },
  },
  {
    modelName: 'users',
    sequelize,
  },
);

export class UserSession extends Model {}
UserSession.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    userId: {
      allowNull: false,
      references: {
        key: 'id',
        model: 'users',
      },
      type: Sequelize.UUID,
    },
    expiresAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    modelName: 'userSessions',
    paranoid: false,
    sequelize,
    updatedAt: false,
  },
);
