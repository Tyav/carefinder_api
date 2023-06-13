const validator = require('express-joi-validation').createValidator({})

const middleValidator = (schemas) => {
  let middlewares = []
  for (let key in schemas) {
    middlewares.push(validator[key](schemas[key]));
  }

  return middlewares
}

module.exports = middleValidator;