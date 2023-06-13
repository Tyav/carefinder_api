const CityModel = require("../models/cityModel");

exports.createCity = async (data) => {
  const existingCity = await this.getCity({ name: data.name, state: data.state });
  if (existingCity) {
    return Promise.reject({ status: 409, message: 'City already exist'})
  }
  const city = await CityModel.create(data);
  await city.populate('state')
  return city;
}

exports.getCity = async (query) => {
  const city = CityModel.findOne(query);
  return city
}
exports.getCities = async (query) => {
  const city = CityModel.find(query).populate({ path: 'state', select: 'id name'});
  return city
}

exports.getManyCitiesByIds = async (cityIdList) => {
  return CityModel.find({
    id: {
        $in: cityIdList
      }
  });
}