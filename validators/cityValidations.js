const Joi = require("joi");
const { hexString } = require("./common");

exports.createCityValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    state: hexString
      .required(),
  }).required(),
};
