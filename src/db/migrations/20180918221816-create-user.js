module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.UUID,
        field: 'user_id',
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
