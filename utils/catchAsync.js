exports.catchAsync = (fn) => {
  return async(req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      
      res.status(error.status || 500).send(error.message || 'Internal Server Error')
    }
  }
}