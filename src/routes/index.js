const express = require('express');

const Data = require('./dataRoutes')

const router = express.Router();

router.use('/Note', Data);

module.exports = router;