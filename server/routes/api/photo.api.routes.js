/* eslint-disable object-curly-spacing */
const router = require('express').Router();
const {Photo, User} = require('../../db/models');

// получить все фотографии
router.get('/', async (request, response) => {
  try {
    const photos = await Photo.findAll();
    response.status(200).json(photos);
    console.log(photos);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось получить все фотографии'});
  }
});

// получить одну фотографию
router.get('/:photoId', async (request, response) => {
  try {
    const photo = await Photo.findOne({where: {id: request.params.photoId}});
    response.json(photo);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось получить фотографию'});
  }
});

// добавить новую фотографию
router.post('/', async (request, response) => {
  try {
    const {title, img, description} = request.body;
    const newPhoto = await Photo.create({
      title,
      img,
      description,
      albumId: request.session.albumId,
      userId: request.session.userId,
    });
    response.json(newPhoto);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось добавить фотографию'});
  }
});

// удалить фотографию
router.delete('/:photoId', async (request, response) => {
  try {
    const {photoId} = request.params;
    const user = await User.findOne({
      where: {id: request.session.userId},
    });
    const photo = await Photo.findOne({where: {id: +photoId}});
    if (user.isAdmin || photo.userId === user.id) {
      await Photo.destory({where: {id: photoId}});
      response.json(photoId);
    }
    response.status(403).json({message: 'Ошибка доступа'});
  } catch ({message}) {
    response.status(400).json({message: 'не удалось удалить фото'});
  }
});

module.exports = router;
