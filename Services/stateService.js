const StateModel = require("../models/stateModel");

exports.createState = async (data) => {
  const existingState = await this.getState({ name: data.name });
  if (existingState)
    return Promise.reject({ status: 409, message: "State already exist" });
  const state = await StateModel.create(data);
  return state;
};
exports.getState = async (query) => {
  const state = await StateModel.findOne(query);
  return state;
};
exports.getAllStates = async (query) => {
  const state = await StateModel.find(query);
  return state;
};
