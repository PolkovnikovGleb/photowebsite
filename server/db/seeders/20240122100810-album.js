/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
const {Album} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Album.bulkCreate([
      {
        title: 'Арина',
        description: 'Индивидульная фотосъемка',
        userId: 1,
      },
      {
        title: 'Полина',
        description: 'Индивидульная фотосъемка',
        userId: 1,
      },
      {
        title: 'Юля',
        description: 'Индивидульная фотосъемка',
        userId: 1,
      },
      {
        title: 'Саша',
        description: 'Индивидульная фотосъемка',
        userId: 1,
      },
      {
        title: 'Арина',
        description: 'Индивидульная фотосъемка',
        userId: 1,
      },
      {
        title: 'Юля',
        description: 'Индивидульная фотосъемка',
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Album.destroy({where: {}});
  },
};
