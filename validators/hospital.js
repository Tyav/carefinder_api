const Joi = require("joi");
const { hexString } = require("./common");

exports.createHospitalValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    state: hexString
      .required(),
    nearbyCities: Joi.array().items(hexString),
    email: Joi.string().email().required(),
  }).required(),
};

exports.updateHospitalValidation = {
  body: Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    state: hexString,
    nearbyCities: Joi.array().items(hexString),
    email: Joi.string().email(),
  }).or('name', 'address', 'state', 'nearbyCities', 'email').required(),
  params: Joi.object({
    id: hexString.required()
  })
};

exports.downloadCSV = {
  query: Joi.object({
    redirect: Joi.string().uri().required(),
    city: hexString,
    search: Joi.string()
  })
}
