const express = require('express');
const { getAllHospitals, createHospital, getHospitalById, updateHospital } = require('../controllers/hospitalControllers');
const { catchAsync } = require('../utils/catchAsync');
const middleValidator = require('../config/validator');
const { createHospitalValidation, updateHospitalValidation } = require('../validators/hospital');
const router = express.Router();

router.get('/', catchAsync(getAllHospitals));

router.post('/', middleValidator(createHospitalValidation), catchAsync(createHospital));

router.get('/:id', catchAsync(getHospitalById));

router.put('/:id', middleValidator(updateHospitalValidation), catchAsync(updateHospital))


module.exports = router;