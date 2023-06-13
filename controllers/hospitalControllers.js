const { getCity, getManyCitiesByIds } = require("../Services/cityService")
const { getHospitals, createHospital, getHospitalById, updateHospital } = require("../Services/hospitalService")
const { getState } = require("../Services/stateService")

exports.getAllHospitals = async (req, res) => {

  const query = req.query

  const hospitals = await getHospitals(query)
  res.status(200).json({
    name: 'Hospitals',
    data: hospitals
  })
}

exports.getHospitalById = async (req, res) => {
  const hospitalId = req.params.id;
  
  const hospital = await getHospitalById(hospitalId);
  res.status(200).json({
    name: 'hospital',
    data: hospital
  })
}

exports.createHospital = async(req, res, next) => {
  // check that state exist,
  const data = req.body;

  if (data.state) {
    const state = await getState({ _id: data.state});
    if (!state) {
      return Promise.reject({ status: 400, message: 'State does not exist'})
    }
  }
  if (data.nearByCities) {
    data.nearByCities = (await getManyCitiesByIds(data.nearByCities)).map(city => city.id);
  }

  const hospital = await createHospital({
    ...data
  })

  res.status(201).json({
    name: 'hospital',
    data: hospital
  })

}

exports.updateHospital = async (req, res) => {
  const data = req.body;
  if (data.state) {
    const state = await getState({ _id: data.state});
    if (!state) {
      return Promise.reject({ status: 400, message: 'State does not exist'})
    }
  }
  if (data.nearByCities) {
    data.nearByCities = (await getManyCitiesByIds(data.nearByCities)).map(city => city.id);
  }
  const hospital = await updateHospital(req.params.id, {
    ...data
  })

  res.status(200).json({
    name: 'hospital',
    data: hospital
  })
}