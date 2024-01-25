/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
const router = require('express').Router();
const {User} = require('../../db/models');

// отдаем всех юзеров
router.get('/', async (request, response) => {
  try {
    const users = await User.findAll({});
    response.status(200).json(users);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось получить все сущности'});
  }
});

// отдаем конкретного одного юзера
router.get('/:userId', async (request, response) => {
  try {
    const {userId} = request.params;
    console.log(userId);
    const user = await User.findOne({where: {id: userId}});
    response.json(user);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось получить юзера'});
  }
});

// добавление юзера
router.post('/', async (request, response) => {
  try {
    const {name, email, password} = request.body;
    const user = await User.create({name, email, password});
    response.json(user);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось добавить юзера'});
  }
});

// изменение пользователя
router.put('/:userId', async (request, response) => {
  try {
    const {userId} = request.params;
    const {name, email, password} = request.body;
    const [result] = await User.update(
      {name, email, password},
      {where: {id: userId}}
    );
    response.json(result);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось изменить юзера'});
  }
});

// удаление пользователля
router.delete('/:userId', async (request, response) => {
  try {
    const {userId} = request.params;
    const result = await User.destroy({where: {id: userId}});
    response.json(result);
  } catch ({message}) {
    response.status(400).json({message: 'не удалось удалить юзера'});
  }
});

module.exports = router;
