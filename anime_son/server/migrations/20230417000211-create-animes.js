'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('animes', {
      anime_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.TEXT
      },
      year_released: {
        type: Sequelize.SMALLINT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('animes');
  }
};