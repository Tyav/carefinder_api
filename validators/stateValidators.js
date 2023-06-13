const Joi = require("joi");

exports.createStateValidation = {
  body: Joi.object({
    name: Joi.string().required()
  }).required(),
};
