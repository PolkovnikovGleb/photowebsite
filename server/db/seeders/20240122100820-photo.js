/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
const {Photo} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Photo.bulkCreate([
      {
        title: 'Фото 1',
        img: '#',
        description: 'один',
        userId: 1,
        albomId: 1,
      },
      {
        title: 'Фото 2',
        img: '#',
        description: 'два',
        userId: 1,
        albomId: 1,
      },
      {
        title: 'Фото 3',
        img: '#',
        description: 'три',
        userId: 1,
        albomId: 1,
      },
      {
        title: 'Фото 1',
        img: '#',
        description: 'один',
        userId: 1,
        albumId: 2,
      },
      {
        title: 'Фото 2',
        img: '#',
        description: 'два',
        userId: 1,
        albumId: 2,
      },
      {
        title: 'Фото 3',
        img: '#',
        description: 'три',
        userId: 1,
        albomId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Photo.destroy({});
  },
};
