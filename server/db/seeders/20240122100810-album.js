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
        url: 'https://disk.yandex.ru/i/2nQ2XwOmNwgHhA',
        userId: 1,
      },
      {
        title: 'Полина',
        description: 'Индивидульная фотосъемка',
        url: 'https://disk.yandex.ru/i/HEb2aEaFiIMwuw',
        userId: 1,
      },
      {
        title: 'Юля',
        description: 'Индивидульная фотосъемка',
        url: 'https://disk.yandex.ru/i/9IA8YfZlvvD6Vw',
        userId: 1,
      },
      {
        title: 'Саша',
        description: 'Индивидульная фотосъемка',
        url: 'https://disk.yandex.ru/i/HJGrp929UNJGPw',
        userId: 1,
      },
      {
        title: 'Арина',
        description: 'Индивидульная фотосъемка',
        url: 'https://disk.yandex.ru/i/WHS5WkEyRyzI-w',
        userId: 1,
      },
      {
        title: 'Саша',
        description: 'Индивидульная фотосъемка',
        url: 'https://disk.yandex.ru/i/wMGWw_nIAGsb3Q',
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Album.destroy({where: {}});
  },
};
