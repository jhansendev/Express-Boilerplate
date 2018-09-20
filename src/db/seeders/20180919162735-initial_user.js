const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          user_id: uuidv4(),
          username: 'justin',
          email: 'demo@gmail.com',
          password: 'password123',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.bulkDelete('Users', null, {})
};
