/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
const {Album} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Album.bulkCreate([
      {
        title: 'Альбом 1',
        description: 'что-то',
        userId: 1,
      },
      {
        title: 'Альбом 2',
        description: 'туц-туц-туц',
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Album.destroy({});
  },
};
