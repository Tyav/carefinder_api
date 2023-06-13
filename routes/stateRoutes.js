const express = require('express');
const { getAllStates, createState } = require('../controllers/stateControllers');
const { catchAsync } = require('../utils/catchAsync');
const middleValidator = require('../config/validator');
const { createStateValidation } = require('../validators/stateValidators');
const router = express.Router();

router.get('/', catchAsync(getAllStates));

router.post('/', middleValidator(createStateValidation),catchAsync(createState));


module.exports = router;