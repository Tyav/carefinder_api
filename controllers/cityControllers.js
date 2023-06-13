const { createCity, getCities } = require("../Services/cityService");
const { getState } = require("../Services/stateService");

exports.getAllCities = async (req, res) => {
  // try {
    const cities = await getCities();
    res.status(200).json({
      name: "cities",
      data: cities,
    });
  // } catch (error) {
  //   next(error)
  // }
};

exports.createCity = async (req, res, next) => {
  // check that state exist,
  const data = req.body;

  const state = await getState({ _id: data.state});
  console.log(state)
  if (!state || !data.state) {
    return Promise.reject({ status: 400, message: 'State does not exist'})
  }
  
  const city = await createCity(data);

  res.status(201).json({
    name: "city",
    data: city,
  });
};
