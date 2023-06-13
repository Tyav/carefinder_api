const express = require('express');
const router = express.Router();
const hospitalRoutes = require('./hospitalRoutes')
const cityRoutes = require('./cityRoutes')
const stateRoutes = require('./stateRoutes')

router.use('/hospitals', hospitalRoutes);
router.use('/cities', cityRoutes);
router.use('/states', stateRoutes);

module.exports = router;
