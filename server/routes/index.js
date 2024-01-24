const router = require('express').Router();

const authApiRouter = require('./api/auth.api.routes');
const userApiRouter = require('./api/user.api.routes');
const albumApiRouter = require('./api/albums.api.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/users', userApiRouter);
router.use('/api/albums', albumApiRouter);

module.exports = router;
