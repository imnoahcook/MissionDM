module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'teams',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gameId: {
        allowNull: false,
        references: {
          model: 'games',
          key: 'id',
        },
        type: DataTypes.INTEGER.UNSIGNED,
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

module.exports.down = queryInterface => queryInterface.dropTable('teams');
