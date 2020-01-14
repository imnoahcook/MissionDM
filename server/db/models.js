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
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    teams: Sequelize.BOOLEAN,
    password: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    isRunning: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    userId: {
      allowNull: false,
      references: {
        key: 'id',
        model: 'users',
      },
      type: Sequelize.UUID,
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
      allowNull: true,
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
    alive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    revived: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
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
    name: Sequelize.STRING,
    imageurl: {
      type: Sequelize.STRING,
      defaultValue:
        'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
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
