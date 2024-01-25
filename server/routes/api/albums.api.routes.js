/* eslint-disable object-curly-spacing */
const router = require('express').Router();
const {Album, User} = require('../../db/models');

// получить все альбомы
router.get('/', async (request, response) => {
  try {
    const albums = await Album.findAll();
    response.json(albums);
  } catch ({message}) {
    response.status(400).json({message});
  }
});

// получить один альбом
router.get('/:albumId', async (request, response) => {
  try {
    const album = await Album.findOne({where: {id: request.params.albumId}});
    response.json(album);
  } catch ({message}) {
    response.status(400).json({message});
  }
});

// добавить/создать новый альбом
router.post('/', async (request, response) => {
  try {
    const {title, description} = request.body;
    const newAlbum = await Album.create({
      title,
      description,
      userId: request.session.user_id,
    });
    response.json(newAlbum);
  } catch ({message}) {
    response.status(400).json({message});
  }
});

// удалить альбом
router.delete('/:albumId', async (request, response) => {
  try {
    const {albumId} = request.params;
    const user = await User.findOne({
      where: {id: request.session.userId},
    });
    const album = await Album.findOne({where: {id: +albumId}});
    if (user.isAdmin || album.userId === user.id) {
      await Album.destroy({where: {id: albumId}});
      response.json(albumId);
      return;
    }
    response.status(403).json({message: 'Ошибка доступа'});
  } catch ({message}) {
    response.status(400).json({message});
  }
});

module.exports = router;
