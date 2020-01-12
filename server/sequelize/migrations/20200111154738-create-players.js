module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'players',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      gameId: {
        allowNull: false,
        references: {
          model: 'games',
          key: 'id',
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      teamId: {
        allowNull: true,
        references: {
          model: 'teams',
          key: 'id',
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      userId: {
        allowNull: false,
        references: {
          key: 'id',
          model: 'users',
        },
        type: DataTypes.UUID,
      },
      targetId: {
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      killCount: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      killTime: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      admin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      alive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    },
  );
};

module.exports.down = queryInterface => queryInterface.dropTable('players');
