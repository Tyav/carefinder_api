const express = require('express');
const { getAllHospitals, createHospital, getHospitalById, updateHospital, exportHospitals } = require('../controllers/hospitalControllers');
const { catchAsync } = require('../utils/catchAsync');
const middleValidator = require('../config/validator');
const { createHospitalValidation, updateHospitalValidation, downloadCSV } = require('../validators/hospital');
const router = express.Router();

router.get('/', catchAsync(getAllHospitals));

router.post('/', middleValidator(createHospitalValidation), catchAsync(createHospital));

router.get('/download', middleValidator(downloadCSV),catchAsync(exportHospitals));

router.get('/:id', catchAsync(getHospitalById));

router.put('/:id', middleValidator(updateHospitalValidation), catchAsync(updateHospital))


module.exports = router;