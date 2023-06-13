const HospitalModel = require("../models/hospitalModel")

exports.getHospitals = async ({ city, search}) => {
  try { 
    const dbQuery = {}
    if (search) {
      dbQuery.name = { $regex: search, $options: "i" }
    } else if (city) {
      // check if city id is included in nearbyCities
      dbQuery.nearbyCities = {
        $in: [ city ]
      }
    }
  
    const hospitals = await HospitalModel.find(dbQuery).populate('state nearbyCities').populate({
      path: 'nearbyCities',
      populate: 'state'
    });
    return hospitals
  } catch (error) {
    return []
  }
}

exports.createHospital = async (data) => {
  const hospital = await HospitalModel.create(data);
  await hospital.populate('state');
  await hospital.populate({
    path: 'nearbyCities',
    populate: 'state'
  })
  return hospital;
}

exports.getHospitalById = async (id) => {
  const hospital =  await HospitalModel.findById(id);
  if (!hospital) {
    return Promise.reject({ status: 404, message: 'Hospital not found'})
  }
  await hospital.populate('state');
  await hospital.populate({
    path: 'nearbyCities',
    populate: 'state'
  })
  return hospital
}

exports.updateHospital = async (id, data) => {
  const hospital = await HospitalModel.findByIdAndUpdate(id, {
    $set: data
  }, { new: true });
  if (!hospital) {
    return Promise.reject({ status: 404, message: 'Hospital not found'})
  }
  await hospital.populate('state');
  await hospital.populate({
    path: 'nearbyCities',
    populate: 'state'
  })
  return hospital;
}