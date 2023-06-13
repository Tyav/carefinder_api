const express = require('express');
const { getAllCities, createCity } = require('../controllers/cityControllers');
const { catchAsync } = require('../utils/catchAsync');
const middleValidator = require('../config/validator');
const { createCityValidation } = require('../validators/cityValidations');
const router = express.Router();

router.get('/', catchAsync(getAllCities));

router.post('/', middleValidator(createCityValidation), catchAsync(createCity));


module.exports = router;