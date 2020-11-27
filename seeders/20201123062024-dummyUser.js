'use strict';

var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let datas = [];

    for (let i = 0; i < 100; i++) {
      let obj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      datas.push(obj)
    }
    return queryInterface.bulkInsert('users', datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
