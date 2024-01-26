/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
const {Photo} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Photo.bulkCreate([
      {
        title: 'Фото 1',
        img: 'https://drive.google.com/file/d/1SeEY5RdQ5aQMXO-lLv-6y9xLwp7DlZfA/view?usp=drive_link',
        description: 'один',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 2',
        img: 'https://drive.google.com/file/d/1m4R6FdsXAjtngWPo5Hc0Du5O_smuzmS7/view?usp=drive_link',
        description: 'два',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 3',
        img: 'https://drive.google.com/file/d/1oi_001j4DrtcaR5uO_w9kcJXqoVT2PQJ/view?usp=drive_link',
        description: 'три',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 4',
        img: 'https://drive.google.com/file/d/1WCIufZUQA5BPlSR3i5Tu4Vz2StYgSlIy/view?usp=drive_link',
        description: 'четыре',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 5',
        img: 'https://drive.google.com/file/d/1YxKQAUi1kg7fIZoBvVXVmbZF9OZs_TzM/view?usp=drive_link',
        description: 'пять',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 6',
        img: 'https://drive.google.com/file/d/1Hhl47U2nuPrgYw8jNUW5KREoHPYd7k3g/view?usp=drive_link',
        description: 'шесть',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 1',
        img: 'https://drive.google.com/file/d/1MQPCzfbxFljvTRAXQzrc0HQp4GAH-B5q/view?usp=drive_link',
        description: 'один',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 2',
        img: 'https://drive.google.com/file/d/1Ko4xShpDVXMVS3ZR8yNYNXmJOh2uQ1_n/view?usp=drive_link',
        description: 'два',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 3',
        img: 'https://drive.google.com/file/d/1VBm0vIhJuK5G2gE7KHaGEyFgQUe1eya-/view?usp=drive_link',
        description: 'три',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 4',
        img: 'https://drive.google.com/file/d/1QRfbXdsO_pYDZ_DRZd9VD0Mm5iwyN7HY/view?usp=drive_link',
        description: 'четыре',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 5',
        img: 'https://drive.google.com/file/d/1bpoUVHuJTnzaqd3iEwZqVb-MaeP8y_hc/view?usp=drive_link',
        description: 'пять',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 6',
        img: 'https://drive.google.com/file/d/1SALHg1-R8Vn7iN0iJBczsqUMTg3JyiBT/view?usp=drive_link',
        description: 'шесть',
        albumId: 2,
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Photo.destroy({where: {}});
  },
};
