/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
const {Photo} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Photo.bulkCreate([
      {
        title: 'Фото 1',
        url: 'https://disk.yandex.ru/i/wsUsbzp5-ROasA',
        description: 'один',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 2',
        url: 'https://disk.yandex.ru/i/onn8G2JMu1wlKQ',
        description: 'два',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 3',
        url: 'https://disk.yandex.ru/i/2nQ2XwOmNwgHhA',
        description: 'три',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 4',
        url: 'https://disk.yandex.ru/i/l8RBrJltcrgBeA',
        description: 'четыре',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 5',
        url: 'https://disk.yandex.ru/i/cQggaKlAcUmTQQ',
        description: 'пять',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 6',
        url: 'https://disk.yandex.ru/i/LwrSNzwrXdTZVQ',
        description: 'шесть',
        albumId: 1,
        userId: 1,
      },
      {
        title: 'Фото 1',
        url: 'https://disk.yandex.ru/i/CkIPT1y9PB3lvg',
        description: 'один',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 2',
        url: 'https://disk.yandex.ru/i/HEb2aEaFiIMwuw',
        description: 'два',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 3',
        url: 'https://disk.yandex.ru/i/WHx7ynqJPcGvNQ',
        description: 'три',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 4',
        url: 'https://disk.yandex.ru/i/ZO4-AzmFGfJ4Zw',
        description: 'четыре',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 5',
        url: 'https://disk.yandex.ru/i/vefDczeVEqKwaw',
        description: 'пять',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 6',
        url: 'https://disk.yandex.ru/i/Hq8jy_uO8baViA',
        description: 'шесть',
        albumId: 2,
        userId: 1,
      },
      {
        title: 'Фото 1',
        url: 'https://disk.yandex.ru/i/9IA8YfZlvvD6Vw',
        description: 'один',
        albumId: 3,
        userId: 1,
      },
      {
        title: 'Фото 2',
        url: 'https://disk.yandex.ru/i/_ntO3NN1pznzbA',
        description: 'два',
        albumId: 3,
        userId: 1,
      },
      {
        title: 'Фото 3',
        url: 'https://disk.yandex.ru/i/BHXWCBDAdIKU5g',
        description: 'три',
        albumId: 3,
        userId: 1,
      },
      {
        title: 'Фото 4',
        url: 'https://disk.yandex.ru/i/cgzph_lwJFsNBA',
        description: 'четыре',
        albumId: 3,
        userId: 1,
      },
      {
        title: 'Фото 5',
        url: 'https://disk.yandex.ru/i/Rtg1D_GS_tVPbw',
        description: 'пять',
        albumId: 3,
        userId: 1,
      },
      {
        title: 'Фото 6',
        url: 'https://disk.yandex.ru/i/kLetCU_lUGQDAg',
        description: 'шесть',
        albumId: 3,
        userId: 1,
      },
      {
        title: 'Фото 1',
        url: 'https://disk.yandex.ru/i/CIPqGaG3rBofDQ',
        description: 'один',
        albumId: 4,
        userId: 1,
      },
      {
        title: 'Фото 2',
        url: 'https://disk.yandex.ru/i/OZ4fUZWnqhXsdA',
        description: 'два',
        albumId: 4,
        userId: 1,
      },
      {
        title: 'Фото 3',
        url: 'https://disk.yandex.ru/i/HJGrp929UNJGPw',
        description: 'три',
        albumId: 4,
        userId: 1,
      },
      {
        title: 'Фото 4',
        url: 'https://disk.yandex.ru/i/6QPSnYJbcbm9OA',
        description: 'четыре',
        albumId: 4,
        userId: 1,
      },
      {
        title: 'Фото 5',
        url: 'https://disk.yandex.ru/i/x71iOQxFo2SBiQ',
        description: 'пять',
        albumId: 4,
        userId: 1,
      },
      {
        title: 'Фото 6',
        url: 'https://disk.yandex.ru/i/8w-iLlBwbwbXog',
        description: 'шесть',
        albumId: 4,
        userId: 1,
      },
      {
        title: 'Фото 1',
        url: 'https://disk.yandex.ru/i/c3hNBcaF3FdqhQ',
        description: 'один',
        albumId: 5,
        userId: 1,
      },
      {
        title: 'Фото 2',
        url: 'https://disk.yandex.ru/i/ul2sXf2MrDe0dQ',
        description: 'два',
        albumId: 5,
        userId: 1,
      },
      {
        title: 'Фото 3',
        url: 'https://disk.yandex.ru/i/k0e3MwKAUSMHgA',
        description: 'три',
        albumId: 5,
        userId: 1,
      },
      {
        title: 'Фото 4',
        url: 'https://disk.yandex.ru/i/2uVHwhf2kOlGVg',
        description: 'четыре',
        albumId: 5,
        userId: 1,
      },
      {
        title: 'Фото 5',
        url: 'https://disk.yandex.ru/i/ZJrmrzaYZpL0kA',
        description: 'пять',
        albumId: 5,
        userId: 1,
      },
      {
        title: 'Фото 6',
        url: 'https://disk.yandex.ru/i/WHS5WkEyRyzI-w',
        description: 'шесть',
        albumId: 5,
        userId: 1,
      },
      {
        title: 'Фото 1',
        url: 'https://disk.yandex.ru/i/DVHncS_L99BSeQ',
        description: 'один',
        albumId: 6,
        userId: 1,
      },
      {
        title: 'Фото 2',
        url: 'https://disk.yandex.ru/i/MMhffjD8GZOkKA',
        description: 'два',
        albumId: 6,
        userId: 1,
      },
      {
        title: 'Фото 3',
        url: 'https://disk.yandex.ru/i/JQlXhH72LUJUcQ',
        description: 'три',
        albumId: 6,
        userId: 1,
      },
      {
        title: 'Фото 4',
        url: 'https://disk.yandex.ru/i/m51JMrmeuyKhOQ',
        description: 'четыре',
        albumId: 6,
        userId: 1,
      },
      {
        title: 'Фото 5',
        url: 'https://disk.yandex.ru/i/wMGWw_nIAGsb3Q',
        description: 'пять',
        albumId: 6,
        userId: 1,
      },
      {
        title: 'Фото 6',
        url: 'https://disk.yandex.ru/i/_J2x9kuhHn2tpA',
        description: 'шесть',
        albumId: 6,
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Photo.destroy({where: {}});
  },
};
