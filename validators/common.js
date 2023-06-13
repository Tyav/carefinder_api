const Joi = require("joi");

exports.hexString = Joi.string().regex(/[a-f0-9]{24}/);
