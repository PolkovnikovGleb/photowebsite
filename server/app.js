require('@babel/register');
require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
});
