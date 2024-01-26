/* eslint-disable object-curly-spacing */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../../db/models');

// регистрация нового пользователя
router.post('/registration', async (request, response) => {
  try {
    let user;
    const {name, email, password} = request.body;
    if (name && email && password) {
      user = await User.findOne({where: {email}});
      if (user) {
        response.status(400).json({message: 'Данная почта уже существует'});
      } else {
        const hash = await bcrypt.hash(request.body.password, 10);
        user = await User.create({
          name,
          email,
          password: hash,
          isAdmin: false,
        });
        request.session.userId = user.id;
        response.status(200).json(user);
      }
    } else {
      response.status(400).json({message: 'Заполните пожалуйста все поля!'});
    }
  } catch ({message}) {
    response.status(500).json(message);
  }
});

// авторизация
router.post('/authorization', async (request, response) => {
  try {
    const {email, password} = request.body;
    const user = await User.findOne({where: {email}});
    if (!email || password) {
      response.status(400).json({message: 'Заполните все поля'});
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!user || compare) {
      response.status(400).json({message: 'Почта или пароль не совпадают'});
    }
    request.session.userId = user.id;
    response.status(200).json(user);
  } catch ({message}) {
    response.status(500).json({message});
  }
});

// проверка на наличия юзера в системе
router.get('/check', async (request, response) => {
  try {
    const {userId} = request.body;
    if (userId) {
      const user = await User.findOne({
        where: {id: userId},
        attributes: {exclude: ['password', 'createdAt', 'updatedAt']},
      });
      response.status(200).json(user);
    }
  } catch ({message}) {
    response.json({message});
  }
});

// удаление сессии на сервере
router.get('/logout', (request, response) => {
  request.session.destroy((error) => {
    if (error) {
      return response.status(500).json({message: 'Ошибка при удалении сессии'});
    }
    return response
      .clearCookie('user_sid')
      .json({message: 'success'})
      .redirect('/');
  });
});

module.exports = router;
