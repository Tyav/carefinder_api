const { createCity, getCities } = require("../Services/cityService");
const { getState, getAllStates, createState } = require("../Services/stateService");

exports.getAllStates = async (req, res) => {
  const states = await getAllStates()
  res.status(200).json({
    name: 'states',
    data: states
  })
}

exports.createState = async(req, res) => {
  // check that state exist,
  const data = req.body;

  const state = await createState(data)

  res.status(201).json({
    name: 'state',
    data: state
  })

}