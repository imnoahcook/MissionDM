module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'games',
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
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      teams: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      isRunning: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
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

module.exports.down = queryInterface => queryInterface.dropTable('games');
