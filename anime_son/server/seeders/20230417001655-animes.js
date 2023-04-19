'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('animes', [{
      name: 'Naruto',
      genre: 'shounen',
      year_released: 2000
    },
    {
      name: 'One Piece',
      genre: 'shounen',
      year_released: 2001
    }, {
      name: 'Bleach',
      genre: 'shounen',
      year_released: 2002
    }, {
      name: 'Death Note',
      genre: 'shounen',
      year_released: 2003
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('animes', null, {})
  }
};
