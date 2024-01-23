/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
const {Photo} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Photo.bulkCreate([
      {
        title: 'Фото 1',
        img: '#',
        description: 'один',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 2',
        img: '#',
        description: 'два',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 3',
        img: '#',
        description: 'три',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 1',
        img: '#',
        description: 'один',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 2',
        img: '#',
        description: 'два',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 3',
        img: '#',
        description: 'три',
        albumId: 2,
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Photo.destroy({where: {}});
  },
};
