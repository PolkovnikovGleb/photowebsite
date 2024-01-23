/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          name: 'Глеб',
          email: 'gleb@gleb.ru',
          password: await bcrypt.hash('123', 10),
          isAdmin: true,
        },
        {
          name: 'Влад',
          email: 'vlad@vlad.ru',
          password: await bcrypt.hash('123', 10),
          isAdmin: true,
        },
        {
          name: 'Сергей',
          email: 'ser@ser.ru',
          password: await bcrypt.hash('123', 10),
          isAdmin: true,
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  },
};
